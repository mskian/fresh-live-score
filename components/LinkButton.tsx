interface LinkButtonProps {
  text: string;
  link: string;
}

export default function LinkButton(props: LinkButtonProps) {
  return (
    <a
      href={props.link}
      class="bg-yellow-400 text-black font-medium py-2 px-4 rounded-full mt-4"
    >
      {props.text}
    </a>
  );
}
