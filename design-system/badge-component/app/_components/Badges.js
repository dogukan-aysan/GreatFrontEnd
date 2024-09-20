import Badge from "./Badge";

function Badges() {
  const sizes = ["sm", "md", "lg"];
  const colors = ["neutral", "error", "warning", "success", "brand"];

  return (
    <div className="h-fit w-60 mx-auto grid grid-cols-badges gap-6 items-center justify-start">
      {colors.map((color) =>
        sizes.map((size) => (
          <Badge key={`${size}/${color}`} size={size} color={color}>
            Label
          </Badge>
        ))
      )}
    </div>
  );
}

export default Badges;
