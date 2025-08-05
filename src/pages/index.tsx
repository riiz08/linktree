import { Avatar } from "@heroui/avatar";
import { Button } from "@heroui/button";

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
      <h1 className="text-default-900 font-bold mt-2">Mangeakk Drama</h1>
      <p className="text-xs text-default-600 text-center">
        Tempat streaming Drama melayu HD tanpa iklan mengganggu
      </p>
      <img
        src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhE_XJ9TyHXdeE5eJ5DvHqQ0wiR4eYyfiT3H5KOFu9Su3zl-4srnIeEuuZE22E6ukGszw-49J435kct8A1j0yQIWzO2lUhEn_Ijs5lHyrnCPLOUjAaNjm3tWmEYrr4FGYmZLnI4_ACS9GK8/s1600/Mm7OeTA.gif"
        className="w-24 my-4"
      />
      <Button
        size="md"
        fullWidth
        className="my-4 font-bold"
        variant="shadow"
        color="danger"
        onPress={handleClick}
      >
        Tonton Sekarang
      </Button>
    </section>
  );
}
