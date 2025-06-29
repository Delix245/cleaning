"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2, CheckCircle, XCircle, Upload, X, FileText, ImageIcon } from "lucide-react"

interface FormData {
  name: string
  email: string
  phone: string
  message: string
}

interface FormStatus {
  type: "idle" | "loading" | "success" | "error"
  message: string
}

export function EnhancedContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [files, setFiles] = useState<File[]>([])
  const [status, setStatus] = useState<FormStatus>({ type: "idle", message: "" })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || [])

    // Validate file count
    if (files.length + selectedFiles.length > 3) {
      setStatus({ type: "error", message: "Максимум 3 файла" })
      return
    }

    // Validate file size and type
    const validFiles = selectedFiles.filter((file) => {
      if (file.size > 5 * 1024 * 1024) {
        // 5MB
        setStatus({ type: "error", message: `Файл ${file.name} слишком большой (макс. 5MB)` })
        return false
      }

      const allowedTypes = ["image/jpeg", "image/png", "image/gif", "application/pdf", "text/plain"]
      if (!allowedTypes.includes(file.type)) {
        setStatus({ type: "error", message: `Неподдерживаемый тип файла: ${file.name}` })
        return false
      }

      return true
    })

    setFiles((prev) => [...prev, ...validFiles])

    // Clear file input
    e.target.value = ""
  }

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index))
  }

  const getFileIcon = (file: File) => {
    if (file.type.startsWith("image/")) {
      return <ImageIcon className="w-4 h-4" />
    }
    return <FileText className="w-4 h-4" />
  }

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const sizes = ["Bytes", "KB", "MB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
  }

  const validateForm = () => {
    if (!formData.name.trim()) {
      setStatus({ type: "error", message: "Пожалуйста, введите ваше имя" })
      return false
    }

    if (!formData.email.trim()) {
      setStatus({ type: "error", message: "Пожалуйста, введите email" })
      return false
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setStatus({ type: "error", message: "Пожалуйста, введите корректный email" })
      return false
    }

    if (!formData.message.trim()) {
      setStatus({ type: "error", message: "Пожалуйста, введите сообщение" })
      return false
    }

    return true
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setStatus({ type: "loading", message: "Отправляем сообщение..." })

    try {
      const submitFormData = new FormData()

      // Add form fields
      Object.entries(formData).forEach(([key, value]) => {
        submitFormData.append(key, value)
      })

      // Add files
      files.forEach((file, index) => {
        submitFormData.append(`file${index}`, file)
      })

      console.log("Submitting form data:", formData)
      console.log(
        "Files to upload:",
        files.map((f) => ({ name: f.name, size: f.size })),
      )

      const response = await fetch("/api/contact-simple", {
        method: "POST",
        body: submitFormData,
      })

      const result = await response.json()
      console.log("API Response:", result)

      if (result.success) {
        setStatus({ type: "success", message: "Сообщение успешно отправлено! Мы свяжемся с вами в ближайшее время." })

        // Reset form
        setFormData({ name: "", email: "", phone: "", message: "" })
        setFiles([])

        // Clear success message after 5 seconds
        setTimeout(() => {
          setStatus({ type: "idle", message: "" })
        }, 5000)
      } else {
        throw new Error(result.error || "Неизвестная ошибка")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setStatus({
        type: "error",
        message: "Не удалось отправить сообщение. Попробуйте еще раз или свяжитесь с нами напрямую.",
      })
    }
  }

  return (
    <section id="contact" className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Свяжитесь с нами</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Готовы преобразить ваш дом? Отправьте нам сообщение, и мы свяжемся с вами в течение часа!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-600">
                    <Upload className="h-5 w-5" />
                    Контактная информация
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                    <Upload className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-medium text-gray-900">Телефон</p>
                      <p className="text-blue-600">+380 97 525 1984</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                    <Upload className="h-5 w-5 text-green-600" />
                    <div>
                      <p className="font-medium text-gray-900">WhatsApp</p>
                      <p className="text-green-600">+380 97 525 1984</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                    <Upload className="h-5 w-5 text-purple-600" />
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <p className="text-purple-600">harabugaslava@gmail.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Быстрый ответ гарантирован!</h3>
                  <p className="text-blue-100">Мы отвечаем на все запросы в течение 1 часа в рабочее время</p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Отправить сообщение</CardTitle>
                <CardDescription>Заполните форму ниже, и мы свяжемся с вами в ближайшее время</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Имя *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Ваше имя"
                        required
                        className="border-gray-300 focus:border-blue-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Телефон</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+380 XX XXX XXXX"
                        className="border-gray-300 focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      required
                      className="border-gray-300 focus:border-blue-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Сообщение *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Расскажите нам о ваших потребностях в уборке..."
                      rows={4}
                      required
                      className="border-gray-300 focus:border-blue-500 resize-none"
                    />
                  </div>

                  {/* File Upload */}
                  <div className="space-y-2">
                    <Label htmlFor="files">Прикрепить файлы (необязательно)</Label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 hover:border-blue-400 transition-colors">
                      <input
                        id="files"
                        type="file"
                        multiple
                        accept="image/*,.pdf,.txt"
                        onChange={handleFileChange}
                        className="hidden"
                        disabled={files.length >= 3}
                      />
                      <label
                        htmlFor="files"
                        className={`flex flex-col items-center justify-center cursor-pointer ${
                          files.length >= 3 ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                      >
                        <Upload className="h-8 w-8 text-gray-400 mb-2" />
                        <p className="text-sm text-gray-600 text-center">
                          {files.length >= 3 ? "Максимум 3 файла" : "Нажмите для выбора файлов или перетащите сюда"}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">Изображения, PDF, DOC, TXT (макс. 5MB каждый)</p>
                      </label>
                    </div>

                    {/* Selected Files */}
                    {files.length > 0 && (
                      <div className="space-y-2">
                        {files.map((file, index) => (
                          <div key={index} className="flex items-center justify-between bg-gray-50 p-2 rounded-lg">
                            <div className="flex items-center space-x-3">
                              {getFileIcon(file)}
                              <div>
                                <p className="text-sm font-medium text-gray-700 truncate">{file.name}</p>
                                <p className="text-xs text-gray-500">{formatFileSize(file.size)}</p>
                              </div>
                            </div>
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              onClick={() => removeFile(index)}
                              className="h-6 w-6 p-0 hover:bg-red-100"
                            >
                              <X className="h-4 w-4 text-red-500" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Status Message */}
                  {status.message && (
                    <div
                      className={`flex items-center space-x-2 p-4 rounded-lg ${
                        status.type === "success"
                          ? "bg-green-50 text-green-700 border border-green-200"
                          : status.type === "error"
                            ? "bg-red-50 text-red-700 border border-red-200"
                            : "bg-blue-50 text-blue-700 border border-blue-200"
                      }`}
                    >
                      {status.type === "loading" && <Loader2 className="w-5 h-5 animate-spin" />}
                      {status.type === "success" && <CheckCircle className="w-5 h-5" />}
                      {status.type === "error" && <XCircle className="w-5 h-5" />}
                      <span className="text-sm">{status.message}</span>
                    </div>
                  )}

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={status.type === "loading"}
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105"
                  >
                    {status.type === "loading" ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Отправляем...
                      </>
                    ) : (
                      "Отправить сообщение"
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
