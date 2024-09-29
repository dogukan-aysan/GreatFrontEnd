"use client";

import { useState } from "react";

import Textarea from "./_components/Textarea";

export default function Home() {
  const [textareaInput, setTextareaInput] = useState("");

  return (
    <div className="min-h-screen py-28">
      <div className="w-[340px] mx-auto flex flex-col gap-8">
        <Textarea
          value={textareaInput}
          setValue={setTextareaInput}
          id={"description"}
          label={"Description"}
          placeholder={"Write your message"}
        />
        <Textarea
          value={textareaInput}
          setValue={setTextareaInput}
          id={"description"}
          label={"Description"}
          placeholder={"Enter a description"}
          errorMessage={"This field is required"}
        />
        <Textarea
          value={textareaInput}
          setValue={setTextareaInput}
          id={"description"}
          label={"Description"}
          placeholder={"Write your message"}
          isDisabled={true}
        />
      </div>
    </div>
  );
}
