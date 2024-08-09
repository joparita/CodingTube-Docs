export const BuyMeACoffeButton = () => {
  const aspectRatio = 3.616666666666667;
  const newHeight = 40;
  const newWidth = newHeight * aspectRatio;

  const buttonStyle = {
    height: `${newHeight}px`,
    width: `${newWidth}px`,
  };

  return (
    <a href="https://www.buymeacoffee.com/CodingTube" target="_blank">
      <img
        src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
        alt="Invítame un café"
        // style="height: 60px !important;width: 217px !important;"
        style={buttonStyle}
      />
    </a>
  );
};
