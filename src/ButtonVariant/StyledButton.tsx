type ButtonVariant = "primary" | "secondary" | "danger";

interface StyledButtonProps {
    variant: ButtonVariant;
    children: React.ReactNode;
    onClick?: () => void;
  }
  
  // Define the StyledButton component
  const StyledButton: React.FC<StyledButtonProps> = ({ variant, children, onClick }) => {
    // Define styles for different variants
    const getButtonStyles = () => {
      switch (variant) {
        case 'primary':
          return {
            backgroundColor: 'blue',
            color: 'white',
            border:'2px solid #fff',
          };
        case 'secondary':
          return {
            backgroundColor: 'gray',
            color: 'black',
            border:'2px solid #fff',
          };
        case 'danger':
          return {
            backgroundColor: 'red',
            color: 'white',
            border:'2px solid #fff',
          };
        default:
          return {};
      }
    };
  
    return (
      <button
        style={{
          padding: '10px 20px',
          borderRadius: '5px',
          cursor: 'pointer',
          ...getButtonStyles(),
        }}
        onClick={onClick}
      >
        {children}
      </button>
    );
  };

  export default StyledButton