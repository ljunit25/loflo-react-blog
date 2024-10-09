interface Props {
  width?: number;
  height?: number;
  color?: string;
}

export const NewPostIcon = ({ width, height, color }: Props) => {
  return (
    <svg
      width={width ? width : 24}
      height={height ? height : 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19 13C19.7 13 20.37 13.13 21 13.35V9L15 3H5C3.89 3 3 3.89 3 5V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H13.35C13.13 20.37 13 19.7 13 19C13 15.69 15.69 13 19 13ZM14 4.5L19.5 10H14V4.5ZM23 18V20H20V23H18V20H15V18H18V15H20V18H23Z"
        fill={color ? color : "#000"}
      />
    </svg>
  );
};

