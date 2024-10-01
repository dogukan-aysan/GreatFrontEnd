import RadioCard from "./_components/RadioCard";

export default function Home() {
  const icons = {
    calendar: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9 1V3H15V1H17V3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9ZM20 11H4V19H20V11ZM7 5H4V9H20V5H17V7H15V5H9V7H7V5Z"></path>
      </svg>
    ),
    calendarView: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 19H20V9H4V19ZM11 13H6V17H11V13Z"></path>
      </svg>
    ),
    calendarTodo: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9 1V3H15V1H17V3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9ZM20 11H4V19H20V11ZM8 14V16H6V14H8ZM18 14V16H10V14H18ZM7 5H4V9H20V5H17V7H15V5H9V7H7V5Z"></path>
      </svg>
    ),
    arrowDown: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
      </svg>
    ),
  };

  return (
    <ul className="flex flex-col items-center gap-8">
      <li>
        <ul className="w-[320px] md:w-[448px] lg:w-fit flex flex-wrap gap-x-4 gap-y-3 md:gap-6 items-center justify-center">
          <li>
            <RadioCard size={"sm"} iconLeft={icons.calendarView}>
              Weekly
            </RadioCard>
          </li>
          <li>
            <RadioCard>Weekly</RadioCard>
          </li>
          <li>
            <RadioCard size={"lg"} iconRight={icons.calendarView}>
              Weekly
            </RadioCard>
          </li>
          <li>
            <RadioCard size={"xl"} iconLeft={icons.calendarView} iconRight={icons.arrowDown}>
              Weekly
            </RadioCard>
          </li>
          <li>
            <RadioCard size={"xxl"} iconOnly={icons.calendarView}></RadioCard>
          </li>
        </ul>
      </li>
      <li>
        <ul className="w-[320px] md:w-[448px] lg:w-fit flex flex-wrap gap-x-4 gap-y-3 md:gap-6 items-center justify-center">
          <li>
            <RadioCard size={"sm"} iconLeft={icons.calendarTodo} selected={true}>
              Monthly
            </RadioCard>
          </li>
          <li>
            <RadioCard selected={true}>Monthly</RadioCard>
          </li>
          <li>
            <RadioCard size={"lg"} iconRight={icons.calendarTodo} selected={true}>
              Monthly
            </RadioCard>
          </li>
          <li>
            <RadioCard size={"xl"} iconLeft={icons.calendarTodo} iconRight={icons.arrowDown} selected={true}>
              Monthly
            </RadioCard>
          </li>
          <li>
            <RadioCard size={"xxl"} iconOnly={icons.calendarTodo} selected={true}></RadioCard>
          </li>
        </ul>
      </li>
      <li>
        <ul className="w-[320px] md:w-[448px] lg:w-fit flex flex-wrap gap-x-4 gap-y-3 md:gap-6 items-center justify-center">
          <li>
            <RadioCard size={"sm"} iconLeft={icons.calendar} disabled={true}>
              Annually
            </RadioCard>
          </li>
          <li>
            <RadioCard disabled={true}>Annually</RadioCard>
          </li>
          <li>
            <RadioCard size={"lg"} iconRight={icons.calendar} disabled={true}>
              Annually
            </RadioCard>
          </li>
          <li>
            <RadioCard size={"xl"} iconLeft={icons.calendar} iconRight={icons.arrowDown} disabled={true}>
              Annually
            </RadioCard>
          </li>
          <li>
            <RadioCard size={"xxl"} iconOnly={icons.calendar} disabled={true}></RadioCard>
          </li>
        </ul>
      </li>
    </ul>
  );
}
