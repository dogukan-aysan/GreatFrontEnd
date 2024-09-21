import ButtonRow from "./_components/ButtonRow";

export default function Home() {
  return (
    <div className="min-h-screen grid min-[769px]:justify-center px-6 sm:px-8 min-[769px]:px-0 py-28">
      <div className="h-fit w-fit flex flex-col gap-12">
        <ButtonRow variant={"primary"} />
        <ButtonRow variant={"secondary"} />
        <ButtonRow variant={"tertiary"} />
        <ButtonRow variant={"linkColor"} />
        <ButtonRow variant={"linkGray"} />
        <ButtonRow variant={"destructive"} />
      </div>
    </div>
  );
}
