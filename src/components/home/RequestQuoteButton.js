import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import { toast } from "../ui/sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const INQUIRY_LABELS = {
  machinery: "Machinery",
  parts: "Spare Parts",
  partnership: "Partnership",
  support: "Support",
  other: "Other",
};

const RequestQuoteButton = () => {
  const { t } = useTranslation(['home', 'common']);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    inquiry: "",
    message: "",
  });

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
          phone: formState.phone,
          inquiry: formState.inquiry,
          inquiry_label: INQUIRY_LABELS[formState.inquiry] || formState.inquiry,
          message: formState.message,
          form_source: "Quote",
        },
        { publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY }
      );

      toast.success(t('home:requestQuote.form_submitted_message'));
      setFormState({
        name: "",
        email: "",
        phone: "",
        inquiry: "",
        message: "",
      });
    } catch (error) {
      toast.error(t('common:form.send_error'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-md">
      <h3 className="font-bold text-xl mb-4 text-jdgreen">
        {t('home:requestQuote.title')}
      </h3>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            {t('common:form.name')} *
          </label>
          <Input
            id="name"
            name="name"
            value={formState.name}
            onChange={handleChange}
            placeholder={t('common:form.name_placeholder')}
            required
            className="w-full"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              {t('common:form.email')} *
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formState.email}
              onChange={handleChange}
              placeholder={t('common:form.email_placeholder')}
              required
              className="w-full"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              {t('common:form.phone')}
            </label>
            <Input
              id="phone"
              name="phone"
              value={formState.phone}
              onChange={handleChange}
              placeholder={t('common:form.phone_placeholder')}
              className="w-full"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="inquiry"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            {t('home:requestQuote.inquiry_type')} *
          </label>
          <Select
            onValueChange={handleSelectChange}
            value={formState.inquiry}
            required
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder={t('common:form.select_inquiry_type')} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="machinery">{t('home:requestQuote.inquiry_options.machinery')}</SelectItem>
              <SelectItem value="parts">{t('home:requestQuote.inquiry_options.parts')}</SelectItem>
              <SelectItem value="partnership">{t('home:requestQuote.inquiry_options.partnership')}</SelectItem>
              <SelectItem value="support">{t('home:requestQuote.inquiry_options.support')}</SelectItem>
              <SelectItem value="other">{t('home:requestQuote.inquiry_options.other')}</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            {t('common:form.message')} *
          </label>
          <Textarea
            id="message"
            name="message"
            value={formState.message}
            onChange={handleChange}
            placeholder={t('common:form.describe_how_we_can_help')}
            required
            rows={5}
            className="w-full"
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-jdgreen hover:bg-jdgreen-light disabled:opacity-70"
        >
          {isSubmitting ? t('common:form.sending') : t('home:requestQuote.submit_button')}
        </Button>
      </form>
    </div>
  );
};

export default RequestQuoteButton;
