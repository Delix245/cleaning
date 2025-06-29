"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"
import { CheckCircle, Upload, X } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    state: "",
    services: [] as string[],
    packages: [] as string[],
    paymentMethod: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")
  const [privacyConsent, setPrivacyConsent] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([])

  const serviceOptions = [
    "Stain Removal",
    "Steam Clean",
    "Trim Restoration",
    "Carpet Shampoo",
    "Deep Cleaning",
    "Couch/Sofa Cleaning",
    "Carpet/Area Rug Cleaning",
    "Upholstery Cleaning",
    "Bed/Mattress Cleaning",
    "Car Interior Cleaning",
  ]

  const packageOptions = [
    "Townhome/Condo Package ($229)",
    "Single Family Home Package ($289)",
    "Partial Home Cleaning ($189)",
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleServiceChange = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }))
  }

  const handlePackageChange = (pkg: string) => {
    setFormData((prev) => ({
      ...prev,
      packages: prev.packages.includes(pkg) ? prev.packages.filter((p) => p !== pkg) : [...prev.packages, pkg],
    }))
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files)
      const maxSize = 10 * 1024 * 1024 // 10MB per file
      const allowedTypes = ["image/jpeg", "image/png", "image/gif", "image/webp", "application/pdf", "text/plain"]

      const validFiles = files.filter((file) => {
        if (file.size > maxSize) {
          setError(`File ${file.name} is too large. Maximum size is 10MB.`)
          return false
        }
        if (!allowedTypes.includes(file.type)) {
          setError(`File ${file.name} is not supported. Please upload images, PDF, or text files.`)
          return false
        }
        return true
      })

      if (validFiles.length > 0) {
        setUploadedFiles((prev) => [...prev, ...validFiles])
        setError("")
      }
    }
  }

  const removeFile = (index: number) => {
    setUploadedFiles((prev) => prev.filter((_, i) => i !== index))
  }

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const sizes = ["Bytes", "KB", "MB", "GB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!privacyConsent) {
      setError("Please agree to the Privacy Policy to continue.")
      return
    }

    if (!formData.address.trim()) {
      setError("Please enter your address.")
      return
    }

    if (!formData.state) {
      setError("Please select your state.")
      return
    }

    if (formData.services.length === 0) {
      setError("Please select at least one service.")
      return
    }

    if (!formData.paymentMethod) {
      setError("Please select a payment method.")
      return
    }

    setIsSubmitting(true)
    setError("")

    try {
      const formDataToSend = new FormData()

      // Add form fields
      Object.entries(formData).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          formDataToSend.append(key, value.join(", "))
        } else {
          formDataToSend.append(key, value)
        }
      })

      // Add files
      uploadedFiles.forEach((file, index) => {
        formDataToSend.append(`file_${index}`, file)
      })

      formDataToSend.append("privacyConsent", privacyConsent.toString())

      const response = await fetch("/api/contact", {
        method: "POST",
        body: formDataToSend,
      })

      if (response.ok) {
        setIsSubmitted(true)
        setFormData({
          name: "",
          phone: "",
          email: "",
          address: "",
          state: "",
          services: [],
          packages: [],
          paymentMethod: "",
          message: "",
        })
        setPrivacyConsent(false)
        setUploadedFiles([])
        // Reset submission status after 10 seconds
        setTimeout(() => setIsSubmitted(false), 10000)

        // Scroll to top of form to show success message
        document.getElementById("contact-form-top")?.scrollIntoView({ behavior: "smooth" })
      } else {
        const data = await response.json()
        setError(data.error || "Something went wrong. Please try again.")
      }
    } catch (error) {
      setError("Error submitting form. Please check your internet connection.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div className="bg-white rounded-lg shadow-xl text-gray-800 w-full max-w-2xl mx-auto">
      <div id="contact-form-top" className="p-8 pb-4">
        <h3 className="text-2xl font-bold text-[#0A5189] mb-6">Get A Free Quote</h3>

        {isSubmitted ? (
          <div className="bg-green-50 border border-green-200 text-green-700 p-6 rounded-md mb-4 flex flex-col items-center justify-center text-center">
            <CheckCircle className="w-12 h-12 text-green-500 mb-3" />
            <h4 className="text-xl font-bold text-green-700 mb-2">Form Submitted Successfully!</h4>
            <p className="text-green-600">
              Thank you for your inquiry! We have received your information and will contact you shortly.
            </p>
          </div>
        ) : (
          <>
            {error && <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-md mb-4">{error}</div>}

            <div className="flex justify-between items-center mb-4">
              <p className="text-sm text-gray-500">Please fill out the form below to get a quote</p>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={toggleExpand}
                className="text-[#0A5189] border-[#0A5189] hover:bg-[#0A5189]/10 bg-transparent"
              >
                {isExpanded ? "Collapse Form" : "Expand Form"}
              </Button>
            </div>
          </>
        )}
      </div>

      {!isSubmitted && (
        <div className={`${isExpanded ? "max-h-full" : "max-h-[500px] overflow-y-auto"} px-8 pb-8`}>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Name <span className="text-[#3D8B7D]">(required)</span>
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="border-gray-300 focus:border-[#3D8B7D]"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                  Phone <span className="text-[#3D8B7D]">(required)</span>
                </label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="border-gray-300 focus:border-[#3D8B7D]"
                  required
                  type="tel"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email <span className="text-[#3D8B7D]">(required)</span>
                </label>
                <Input
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border-gray-300 focus:border-[#3D8B7D]"
                  required
                  type="email"
                />
              </div>

              <div>
                <label htmlFor="state" className="block text-gray-700 font-medium mb-2">
                  State <span className="text-[#3D8B7D]">(required)</span>
                </label>
                <select
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:border-[#3D8B7D] focus:outline-none focus:ring-2 focus:ring-[#3D8B7D]/20"
                  required
                >
                  <option value="">Select State</option>
                  <option value="ND">North Dakota (ND)</option>
                  <option value="MN">Minnesota (MN)</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="address" className="block text-gray-700 font-medium mb-2">
                Address <span className="text-[#3D8B7D]">(required)</span>
              </label>
              <Input
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="border-gray-300 focus:border-[#3D8B7D]"
                required
                placeholder="Enter your full address"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Services Needed <span className="text-[#3D8B7D]">(select all that apply)</span>
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-h-40 overflow-y-auto border border-gray-300 rounded-md p-3">
                {serviceOptions.map((service) => (
                  <label key={service} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.services.includes(service)}
                      onChange={() => handleServiceChange(service)}
                      className="h-4 w-4 text-[#3D8B7D] focus:ring-[#3D8B7D] border-gray-300 rounded"
                    />
                    <span className="text-sm text-gray-700">{service}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Cleaning Packages <span className="text-gray-600">(optional)</span>
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {packageOptions.map((pkg) => (
                  <label key={pkg} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.packages.includes(pkg)}
                      onChange={() => handlePackageChange(pkg)}
                      className="h-4 w-4 text-[#3D8B7D] focus:ring-[#3D8B7D] border-gray-300 rounded"
                    />
                    <span className="text-sm text-gray-700">{pkg}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label htmlFor="paymentMethod" className="block text-gray-700 font-medium mb-2">
                Preferred Payment Method <span className="text-[#3D8B7D]">(required)</span>
              </label>
              <select
                id="paymentMethod"
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:border-[#3D8B7D] focus:outline-none focus:ring-2 focus:ring-[#3D8B7D]/20"
                required
              >
                <option value="">Select Payment Method</option>
                <option value="card">Credit/Debit Card</option>
                <option value="cash">Cash</option>
                <option value="check">Check</option>
              </select>
            </div>

            <div>
              <label htmlFor="photos" className="block text-gray-700 font-medium mb-2">
                Upload Files <span className="text-gray-600">(optional - photos, documents, etc.)</span>
              </label>
              <div className="relative">
                <input
                  type="file"
                  id="photos"
                  multiple
                  accept="image/*,.pdf,.txt"
                  onChange={handleFileUpload}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  title="Select files to upload"
                />
                <div className="w-full p-4 border-2 border-dashed border-gray-300 rounded-md hover:border-[#3D8B7D] focus-within:border-[#3D8B7D] transition-colors duration-200 cursor-pointer">
                  <div className="text-center">
                    <Upload className="mx-auto h-8 w-8 text-gray-400 mb-2" />
                    <div className="flex items-center justify-center">
                      <Button
                        type="button"
                        variant="outline"
                        className="pointer-events-none border-[#3D8B7D] text-[#3D8B7D] hover:bg-[#3D8B7D] hover:text-white bg-transparent"
                      >
                        Choose Files
                      </Button>
                    </div>
                    <p className="mt-2 text-sm text-gray-500">
                      {uploadedFiles.length === 0 ? "No files selected" : `${uploadedFiles.length} file(s) selected`}
                    </p>
                    <p className="text-xs text-gray-400 mt-1">Supported: Images, PDF, Text files (Max 10MB each)</p>
                  </div>
                </div>
              </div>
              {uploadedFiles.length > 0 && (
                <div className="mt-3 space-y-2">
                  <h4 className="text-sm font-medium text-gray-700">Selected Files:</h4>
                  {uploadedFiles.map((file, index) => (
                    <div key={index} className="flex items-center justify-between bg-gray-50 p-3 rounded-md border">
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">{file.name}</p>
                        <p className="text-xs text-gray-500">{formatFileSize(file.size)}</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFile(index)}
                        className="ml-3 text-red-500 hover:text-red-700 p-1 rounded-full hover:bg-red-50 transition-colors"
                        title="Remove file"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="border-gray-300 focus:border-[#3D8B7D]"
                rows={4}
                placeholder="Tell us more about your cleaning needs..."
              />
            </div>

            <div className="flex items-start space-x-3 py-4">
              <input
                type="checkbox"
                id="privacy-consent"
                checked={privacyConsent}
                onChange={(e) => setPrivacyConsent(e.target.checked)}
                className="mt-1 h-4 w-4 text-[#3D8B7D] focus:ring-[#3D8B7D] border-gray-300 rounded"
                required
              />
              <label htmlFor="privacy-consent" className="text-sm text-gray-700 leading-relaxed">
                I agree to the{" "}
                <Link
                  href="/privacy-policy"
                  target="_blank"
                  className="text-[#0A5189] hover:text-[#3D8B7D] underline font-medium"
                >
                  Privacy Policy
                </Link>{" "}
                and{" "}
                <Link
                  href="/terms"
                  target="_blank"
                  className="text-[#0A5189] hover:text-[#3D8B7D] underline font-medium"
                >
                  Terms of Service
                </Link>{" "}
                and consent to the collection and use of my personal information as described therein.{" "}
                <span className="text-[#3D8B7D]">(required)</span>
              </label>
            </div>

            <Button type="submit" className="w-full get-price-btn" disabled={isSubmitting || !privacyConsent}>
              {isSubmitting ? "Submitting..." : "Get A Price"}
            </Button>
          </form>
        </div>
      )}
    </div>
  )
}
