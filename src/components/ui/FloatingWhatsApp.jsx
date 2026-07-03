import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  const phoneNumber = "917077769100"; // Replace if needed

  const message =
    "Hello Mye Farm! I would like to know more about your products.";

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed
        bottom-6
        right-6
        z-50
        bg-[#25D366]
        text-white
        px-5
        py-4
        rounded-full
        shadow-2xl
        flex
        items-center
        gap-3
        hover:scale-110
        hover:shadow-green-500/40
        transition-all
        duration-300
      "
    >
      <MessageCircle size={24} />

      <div className="hidden md:block">
        <p className="text-sm font-semibold leading-none">
          Need Help?
        </p>

        <p className="text-xs opacity-90">
          WhatsApp Us
        </p>
      </div>
    </a>
  );
}