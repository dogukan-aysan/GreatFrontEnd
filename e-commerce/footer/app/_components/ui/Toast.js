import clsx from "clsx";

function Toast({ children }) {
  const isSuccess = children.includes("success");

  return (
    <div
      className={clsx(
        "w-[330px] sm:w-fit p-1 sm:pr-2.5 absolute top-6 left-1/2 -translate-x-1/2 flex items-center gap-3 text-sm font-medium rounded-full",
        isSuccess ? "bg-green-50 text-green-700" : "bg-red-50 text-red-600"
      )}
    >
      <p
        className={clsx(
          "px-2.5 py-0.5 text-sm font-medium shadow-badge rounded-full bg-white",
          isSuccess ? "text-green-700 " : "text-red-800"
        )}
      >
        {isSuccess ? "Success" : "Error"}
      </p>
      <p>{children}</p>
    </div>
  );
}

export default Toast;
