import { Avatar } from "@heroui/avatar";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";

// const handleClick = () => {
//   window.location.href =
//     "intent://mangeakkk.my.id#Intent;scheme=https;package=com.android.chrome;end";
// };

const handleCopy = (id: string) => {
  const input = document.getElementById(id) as HTMLInputElement | null;
  if (input) {
    navigator.clipboard
      .writeText(input.value)
      .then(() => {
        alert("Berhasil disalin: " + input.value);
      })
      .catch(() => {
        alert("Gagal menyalin teks!");
      });
  }
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

      <p className="text-default-foreground text-sm bg-red-600 p-4 rounded-md mb-4">
        Notes: Tekan tombol copy kat bawah lepas tuh paste ke google, sebab
        tiktok tak support buka link bawah ni
      </p>
      <Input
        isReadOnly
        id="web"
        name="web"
        className="max-w-xs"
        defaultValue="https://mangeakkk.my.id"
        label="Link Website"
        type="text"
        endContent={
          <Button
            size="sm"
            variant="shadow"
            color="primary"
            onPress={() => handleCopy("web")}
          >
            Copy
          </Button>
        }
      />
      <Input
        isReadOnly
        name="tele"
        id="tele"
        className="max-w-xs mt-2"
        defaultValue="https://t.me/+pBH5WCVyC0wxNWRl"
        label="Link Telegram"
        type="text"
        endContent={
          <Button
            size="sm"
            variant="shadow"
            color="primary"
            onPress={() => handleCopy("tele")}
          >
            Copy
          </Button>
        }
      />
    </section>
  );
}
