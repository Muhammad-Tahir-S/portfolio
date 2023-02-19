import Text from "./Text";

export default function About() {
  return (
    <div className="flex flex-col">
      <Text variant="L2" color="sec-200" uppercase>
        Muhammad-Tahir Sanuth.
      </Text>

      <Text variant="L1" color="white">
        React Web Developer.
      </Text>
      <Text variant="H5" color="pri-700" className="mt-5">
        I develop user interfaces into highly performant, accessible
        applications.
      </Text>
    </div>
  );
}
