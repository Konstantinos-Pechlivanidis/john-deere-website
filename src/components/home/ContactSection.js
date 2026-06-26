import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { useTranslation } from "react-i18next";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import SocialMediaLinks from "../ui/social-media-links";
import { toast } from "../../hooks/use-toast";

const INQUIRY_LABELS = {
  machinery: "Machinery",
  parts: "Spare Parts",
  partnership: "Partnership",
  support: "Support",
  other: "Other",
};

const ContactSection = () => {
  const { t } = useTranslation(['home', 'contact']);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    inquiry: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (value) => {
    setFormState((prev) => ({
      ...prev,
      inquiry: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          name: formState.name,
          email: formState.email,
          phone: formState.phone || "Not provided",
          inquiry: formState.inquiry,
          inquiry_label: INQUIRY_LABELS[formState.inquiry] || formState.inquiry,
          message: formState.message,
          form_source: "Contact",
        },
        { publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY }
      );

      toast({
        title: t('common:form.success_title'),
        description: t('common:form.success_description'),
      });
      setFormState({
        name: "",
        email: "",
        phone: "",
        inquiry: "",
        message: "",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: t('common:form.error_title'),
        description: t('common:form.error_description'),
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Info */}
          <div>
            <h2 className="text-4xl font-extrabold mb-4 text-charcoal-dark tracking-tight leading-tight">
              {t('home:contact_section.title')}
            </h2>
            <div className="w-24 h-1 bg-jdyellow mb-6 rounded"></div>

            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              {t('home:contact_section.subtitle')}
            </p>

            <div className="bg-gray-50 p-6 rounded-xl shadow-md mb-8">
              <h3 className="text-xl font-bold text-jdgreen mb-4">{t('contact:info.hours_title')}</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex justify-between">
                  <span>{t('contact:info.monday_friday')}</span>
                  <span className="font-medium">9:00 - 17:00</span>
                </li>
                <li className="flex justify-between">
                  <span>{t('contact:info.saturday')}</span>
                  <span className="font-medium">9:00 - 14:00</span>
                </li>
                <li className="flex justify-between">
                  <span>{t('contact:info.sunday')}</span>
                  <span className="font-medium">{t('contact:info.closed')}</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-jdgreen mb-4">{t('contact:info.address_title')}</h3>
              <address className="not-italic text-gray-600 text-sm leading-relaxed">
                <p>{t('contact:info.address_line1')}</p>
                <p>{t('contact:info.address_line2')}</p>
                <p className="mt-4 font-semibold text-charcoal-dark">{t('contact:info.phone_label')}:</p>
                <p>+30 2310 512239</p>
                <p>+30 2310 552678</p>
                <p>+30 6948506485</p>
                <p>+30 6948506486</p>
                <p className="mt-4 font-semibold text-charcoal-dark">{t('contact:info.email_label')}:</p>
                <p>info@psomasst.gr</p>
              </address>
              
              {/* Social Media Links */}
              <div className="mt-6">
                <h4 className="text-lg font-semibold text-jdgreen mb-3">{t('common:follow_us')}</h4>
                <SocialMediaLinks variant="contact" />
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-gray-50 p-8 rounded-xl shadow-md">
            <h3 className="text-xl font-bold text-jdgreen mb-6">{t('contact:form.send')}</h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('contact:form.name')} *
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  placeholder={t('contact:form.name')}
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('contact:form.email')} *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                    placeholder={t('common:form.email_placeholder')}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('contact:form.phone')}
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formState.phone}
                    onChange={handleChange}
                    placeholder={t('common:form.phone_placeholder')}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="inquiry" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('contact:form.inquiry_type')} *
                </label>
                <Select onValueChange={handleSelectChange} value={formState.inquiry} required>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder={t('common:form.select_inquiry_type')} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="parts">{t('contact:form.parts')}</SelectItem>
                    <SelectItem value="partnership">{t('contact:form.partnership')}</SelectItem>
                    <SelectItem value="other">{t('contact:form.other')}</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('contact:form.message')} *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  placeholder={t('common:form.describe_how_we_can_help')}
                  required
                  rows={5}
                />
              </div>

              <Button type="submit" disabled={isSubmitting} className="w-full bg-jdgreen hover:bg-jdgreen-light text-white text-base font-medium rounded-full py-3">
                {isSubmitting ? t('common:form.sending') : t('contact:form.send')}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
