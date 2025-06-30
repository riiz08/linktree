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
  window.location.href =
    "intent://mangeakkk.my.id#Intent;scheme=https;package=com.android.chrome;end";
};

export default function IndexPage() {
  return (
    <section className="min-h-screen flex items-center px-8 flex-col justify-center bg-content1">
      <Avatar
        className="w-20 h-20 text-large"
        src="https://mangeakkk.my.id/logo/logo.png"
      />
      <h1 className="text-default-500 font-semibold mt-2">Mangeakk Drama</h1>
      <p className="text-sm text-default-200">
        Tempat streaming Drama melayu HD tanpa iklan
      </p>
      <Button
        size="md"
        fullWidth
        className="my-4"
        endContent={<ArrowIcon />}
        variant="shadow"
        color="primary"
        onPress={handleClick}
      >
        Tonton full episode HD klik sini
      </Button>
    </section>
  );
}
