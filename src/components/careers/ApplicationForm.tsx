import React, { useState } from 'react';
import { Send, ArrowLeft, ArrowRight } from 'lucide-react';
import Button from '../ui/Button';

interface ApplicationFormProps {
  position: {
    id: string;
    title: string;
    location: string;
  };
  onClose: () => void;
}

type FormStep = 'personal' | 'experience' | 'questions' | 'review';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  location: string;
  resume: File | null;
  experience: string;
  linkedin: string;
  coverLetter: string;
  startDate: string;
  hearAbout: string;
}

const initialFormData: FormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  location: '',
  resume: null,
  experience: '',
  linkedin: '',
  coverLetter: '',
  startDate: '',
  hearAbout: ''
};

export default function ApplicationForm({ position, onClose }: ApplicationFormProps) {
  const [currentStep, setCurrentStep] = useState<FormStep>('personal');
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({
        ...prev,
        resume: e.target.files![0]
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Prepare email content
    const emailSubject = `Job Application: ${position.title} (${position.id})`;
    const emailBody = `
Position: ${position.title}
Location: ${position.location}

Personal Information:
- Name: ${formData.firstName} ${formData.lastName}
- Email: ${formData.email}
- Phone: ${formData.phone}
- Location: ${formData.location}
- LinkedIn: ${formData.linkedin}

Experience Summary:
${formData.experience}

Cover Letter:
${formData.coverLetter}

Additional Information:
- Available Start Date: ${formData.startDate}
- How did you hear about us: ${formData.hearAbout}
    `;

    // Open email client with pre-filled content
    window.location.href = `mailto:careers@aeroplusgroup.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Reset form after short delay
    setTimeout(() => {
      setIsSubmitting(false);
      onClose();
    }, 1000);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 'personal':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 focus:ring-2 focus:ring-airbus-gold focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 focus:ring-2 focus:ring-airbus-gold focus:border-transparent"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-200 focus:ring-2 focus:ring-airbus-gold focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-200 focus:ring-2 focus:ring-airbus-gold focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Current Location *
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-200 focus:ring-2 focus:ring-airbus-gold focus:border-transparent"
                required
              />
            </div>
          </div>
        );

      case 'experience':
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Resume/CV *
              </label>
              <input
                type="file"
                name="resume"
                onChange={handleFileChange}
                className="w-full px-4 py-3 border border-gray-200 focus:ring-2 focus:ring-airbus-gold focus:border-transparent"
                accept=".pdf,.doc,.docx"
                required
              />
              <p className="text-sm text-gray-500 mt-1">
                Accepted formats: PDF, DOC, DOCX (max 5MB)
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                LinkedIn Profile
              </label>
              <input
                type="url"
                name="linkedin"
                value={formData.linkedin}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-200 focus:ring-2 focus:ring-airbus-gold focus:border-transparent"
                placeholder="https://linkedin.com/in/your-profile"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Experience Summary *
              </label>
              <textarea
                name="experience"
                value={formData.experience}
                onChange={handleInputChange}
                rows={5}
                className="w-full px-4 py-3 border border-gray-200 focus:ring-2 focus:ring-airbus-gold focus:border-transparent"
                required
              />
            </div>
          </div>
        );

      case 'questions':
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Cover Letter *
              </label>
              <textarea
                name="coverLetter"
                value={formData.coverLetter}
                onChange={handleInputChange}
                rows={6}
                className="w-full px-4 py-3 border border-gray-200 focus:ring-2 focus:ring-airbus-gold focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                When can you start? *
              </label>
              <input
                type="text"
                name="startDate"
                value={formData.startDate}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-200 focus:ring-2 focus:ring-airbus-gold focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                How did you hear about us? *
              </label>
              <select
                name="hearAbout"
                value={formData.hearAbout}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-200 focus:ring-2 focus:ring-airbus-gold focus:border-transparent"
                required
              >
                <option value="">Select an option</option>
                <option value="LinkedIn">LinkedIn</option>
                <option value="Company Website">Company Website</option>
                <option value="Job Board">Job Board</option>
                <option value="Referral">Referral</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
        );

      case 'review':
        return (
          <div className="space-y-6">
            <div className="bg-navy-900/5 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-navy-900 mb-4">Application Summary</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-navy-900">Personal Information</h4>
                  <p className="text-gray-600">
                    {formData.firstName} {formData.lastName}<br />
                    {formData.email}<br />
                    {formData.phone}<br />
                    {formData.location}
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-navy-900">Resume</h4>
                  <p className="text-gray-600">
                    {formData.resume?.name || 'No file uploaded'}
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-navy-900">Experience Summary</h4>
                  <p className="text-gray-600">{formData.experience}</p>
                </div>

                <div>
                  <h4 className="font-medium text-navy-900">Additional Information</h4>
                  <p className="text-gray-600">
                    Available to start: {formData.startDate}<br />
                    Found us through: {formData.hearAbout}
                  </p>
                </div>
              </div>
            </div>

            <p className="text-sm text-gray-500">
              Please review your application carefully before submitting. Once submitted, you'll receive
              a confirmation email with next steps.
            </p>
          </div>
        );
    }
  };

  const steps: FormStep[] = ['personal', 'experience', 'questions', 'review'];
  const currentStepIndex = steps.indexOf(currentStep);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-lg shadow-xl">
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-navy-900">
              Apply for {position.title}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500"
            >
              ×
            </button>
          </div>
          <p className="text-gray-600 mt-2">{position.location}</p>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          {/* Progress Indicator */}
          <div className="mb-8">
            <div className="flex justify-between mb-2">
              {steps.map((step, index) => (
                <div
                  key={step}
                  className={`flex-1 ${
                    index < steps.length - 1 ? 'border-b-2' : ''
                  } ${
                    index <= currentStepIndex
                      ? 'border-airbus-gold'
                      : 'border-gray-200'
                  }`}
                />
              ))}
            </div>
            <div className="flex justify-between">
              <span className="text-sm font-medium text-gray-500">
                Step {currentStepIndex + 1} of {steps.length}
              </span>
              <span className="text-sm font-medium text-gray-500">
                {currentStep === 'personal'
                  ? 'Personal Information'
                  : currentStep === 'experience'
                  ? 'Experience'
                  : currentStep === 'questions'
                  ? 'Additional Questions'
                  : 'Review'}
              </span>
            </div>
          </div>

          {renderStep()}

          <div className="mt-8 flex justify-between">
            {currentStepIndex > 0 ? (
              <button
                type="button"
                onClick={() => setCurrentStep(steps[currentStepIndex - 1])}
                className="flex items-center text-gray-600 hover:text-navy-900"
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back
              </button>
            ) : (
              <div />
            )}

            {currentStep === 'review' ? (
              <Button
                variant="primary"
                type="submit"
                disabled={isSubmitting}
                className="ml-auto"
              >
                {isSubmitting ? (
                  <>
                    <Send className="h-5 w-5 animate-pulse mr-2" />
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit Application
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>
            ) : (
              <Button
                variant="primary"
                type="button"
                onClick={() => setCurrentStep(steps[currentStepIndex + 1])}
              >
                Continue
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}