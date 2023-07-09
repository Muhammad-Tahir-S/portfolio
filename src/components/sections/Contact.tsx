import Text from "../Text";
import Github from "@/assets/icons/github.svg";
import LinkedIn from "@/assets/icons/linked-in.svg";

export default function Contact() {
  const GITHUB_LINK = "https://github.com/Muhammad-Tahir-S";
  const LINKEDIN_LINK =
    "https://www.linkedin.com/in/muhammad-tahir-sanuth-560566104/";
  return (
    <div className="w-full">
      <div className="w-full rounded-sm md:w-[70%] mx-auto text-center bg-gray-300 p-6">
        <Text variant="H4" color="pri-200" className="font-semibold">
          Presently open to oppportunities. You can reach me at:&nbsp;
          <span className="text-primary-300">
            <a
              href="mailto:mtz5prif@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              mtz5prif@gmail.com
            </a>
          </span>
        </Text>

        <div className="flex gap-4 justify-center mt-4 items-start">
          <a href={GITHUB_LINK} target="_blank" rel="noreferrer">
            <Github className="w-8 h-8 fill-primary-250 mt-[2px]" />
          </a>
          <a href={LINKEDIN_LINK} target="_blank" rel="noreferrer">
            <LinkedIn className="w-8 h-8 fill-primary-250" />
          </a>
        </div>
      </div>
    </div>
  );
}
