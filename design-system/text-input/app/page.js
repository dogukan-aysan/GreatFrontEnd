import TextInput from "./_components/TextInput";

export default function Home() {
  const questionMarkIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11 15H13V17H11V15ZM13 13.3551V14H11V12.5C11 11.9477 11.4477 11.5 12 11.5C12.8284 11.5 13.5 10.8284 13.5 10C13.5 9.17157 12.8284 8.5 12 8.5C11.2723 8.5 10.6656 9.01823 10.5288 9.70577L8.56731 9.31346C8.88637 7.70919 10.302 6.5 12 6.5C13.933 6.5 15.5 8.067 15.5 10C15.5 11.5855 14.4457 12.9248 13 13.3551Z"></path>
    </svg>
  );
  const mailIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z"></path>
    </svg>
  );
  return (
    <div className="min-h-screen py-28">
      <div className="w-[340px] mx-auto flex flex-col gap-12">
        <TextInput label="Email" placeholder="name@email.com" hintText={"This is a hint text."} iconRight={questionMarkIcon} />
        <TextInput
          label="Email"
          placeholder="name@email.com"
          hintText={"This is a hint text."}
          iconLeft={mailIcon}
          iconRight={questionMarkIcon}
        />
        <TextInput
          label="Email"
          placeholder="name@email.com"
          hintText={"This is a hint text."}
          isDisabled={true}
          iconRight={questionMarkIcon}
        />
        <TextInput
          label="Email"
          placeholder="name@email.com"
          hintText={"This is a hint text."}
          errorMessage="This is an error message"
          iconRight={questionMarkIcon}
          value="name@email.com"
        />
      </div>
    </div>
  );
}
