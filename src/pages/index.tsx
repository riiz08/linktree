import { Avatar } from "@heroui/avatar";
import { Button } from "@heroui/button";

const ArrowIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-arrow-right-icon lucide-arrow-right"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
};

const handleClick = () => {
  // Delay sedikit agar TikTok WebView kadang tidak menganggapnya sebagai auto-popup
  setTimeout(() => {
    const newWindow = window.open("https://mangeakkk.my.id", "_blank");
    if (newWindow) {
      newWindow.focus(); // untuk browser biasa
    } else {
      // Fallback, kalau pop-up diblokir
      window.location.href = "https://mangeakkk.my.id";
    }
  }, 100);
};

export default function IndexPage() {
  return (
    <section className="min-h-screen flex items-center px-8 flex-col justify-center bg-content1">
      <Avatar
        className="w-20 h-20 text-large"
        src="https://gifsec.com/wp-content/uploads/2022/11/dark-anime-gif-1.gif"
      />
      <h1 className="text-default-500 font-semibold mt-2">Riiz O'Briennn</h1>
      <p className="text-sm text-default-200">Individual Dev</p>
      <Button
        size="md"
        fullWidth
        className="my-4"
        endContent={<ArrowIcon />}
        variant="shadow"
        onPress={handleClick}
      >
        Tonton full klik sini
      </Button>
    </section>
  );
}
