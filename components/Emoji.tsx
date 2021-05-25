// "How to use emojis in React", by @seanmcp

interface EmojiProps {
  symbol: string;
  label?: string;
}

const Emoji = ({ symbol, label }: EmojiProps): JSX.Element => {
  return (
    <span role="img" aria-label={label} aria-hidden={label ? 'false' : 'true'}>
      {symbol}
    </span>
  );
};

export default Emoji;
