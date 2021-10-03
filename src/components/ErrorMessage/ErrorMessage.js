
const ErrorMessage = ({ children }) => {
    return (
      <div
        style={{
          width: "50vw",
          padding: 10,
          marginBottom: 10,
          borderRadius: 4,
          backgroundColor: "crimson",
          textAlign: "center",
          color: "white",
          textTransform: "capitalize",
        }}
      >
        {children}
      </div>
    );
  };
  
  export default ErrorMessage;