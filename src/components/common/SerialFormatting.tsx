import { ElementType } from "react";

const regex = /(?<number>\d+)th\s+(?<rest>.+)/;

interface SerialFormattingProps {
  str: string;
  wrapper: ElementType;
  wrapperProps?: Record<string, any>;
}

export default function SerialFormatting({
  str,
  wrapper: Wrapper,
  wrapperProps = {},
}: SerialFormattingProps) {
  const match = str.match(regex);
  if (!match || !match.groups) {
    return <Wrapper {...wrapperProps}>{str}</Wrapper>;
  }

  return (
    <Wrapper {...wrapperProps}>
      {match.groups.number}
      <sup>th</sup> {match.groups.rest}
    </Wrapper>
  );
}
