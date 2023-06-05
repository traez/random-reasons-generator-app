import Image from "next/image";

export default function Section({ borderColor, obiPic }) {
  return (
    <section>
      <Image
        src={`/images/obip${obiPic}.jpg`}
        alt=""
        width={220}
        height={293}
        id="obi-pics"
        style={{ border: `10px solid ${borderColor}` }}
      />
    </section>
  );
}
