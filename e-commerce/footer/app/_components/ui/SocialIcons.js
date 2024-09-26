function SocialIcons({ icons }) {
  return (
    <ul className="flex gap-6 text-neutral-400">
      {icons.map((icon, index) => (
        <li key={index} tabIndex={"0"} className="focus:outline-none focus:ring-4 focus:ring-indigo-600/[.12] rounded">
          <a>{icon}</a>
        </li>
      ))}
    </ul>
  );
}

export default SocialIcons;
