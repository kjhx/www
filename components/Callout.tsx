interface CalloutProps {
  Icon: React.ElementType,
  children: any
}

const Callout = ({ Icon, children }: CalloutProps): JSX.Element => {
  return (
    <div className='flex items-start space-x-3'>
      <div className='pt-1'>
        <Icon size={18} strokeWidth={3}/>
      </div>
      {children}
    </div>
  );
};

export default Callout;