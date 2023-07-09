import Text from "../Text";
import Github from "@/assets/icons/github.svg";
import LinkedIn from "@/assets/icons/linked-in.svg";

export default function Contact() {
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
          <Github className="w-8 h-8 fill-primary-250 mt-[2px]" />
          <LinkedIn className="w-8 h-8 fill-primary-250" />
        </div>
      </div>
    </div>
  );
}
