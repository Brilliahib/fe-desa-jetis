import SectionTitle from "@/components/atoms/typography/SectionTitle";

export default function HomeLocation() {
  return (
    <div className="pad-x space-y-8 md:space-y-16">
      <SectionTitle
        category="Peta"
        title="Letak Geografis"
        description="Secara geografis Desa Jetis terletak dibagian selatan Ibu Kota Kecamatan merupakan bagian integral dari wilayah Kabupaten Klaten."
      />
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13008.539286615614!2d110.57330489089048!3d-7.711110301431323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a447b119b6653%3A0x5027a76e3559ab0!2sJetis%2C%20Klaten%20Selatan%2C%20Klaten%20Regency%2C%20Central%20Java!5e0!3m2!1sen!2sid!4v1738067299250!5m2!1sen!2sid"
          width={600}
          height={450}
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full rounded-xl"
        ></iframe>
      </div>
    </div>
  );
}
