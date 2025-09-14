
interface PopupProps {
  title: string;
  date: string;
  onClose: () => void;
}

function Popup({ title, date, onClose }: PopupProps) {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h3>Guild Event Alert</h3>
        <p><strong>{title}</strong></p>
        <p>Held on {new Date(date).toLocaleDateString()}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default Popup;
