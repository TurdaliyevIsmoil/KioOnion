const SuccessModal = ({ status }) => {
  return (
    <div
      className={`fixed bg-[white] z-[100] flex items-center justify-center h-screen w-screen inset-0 ${status}`}
    >
      <div className="flex items-center gap-5 text-[#2ecc71]">
        <img
          width={"80px"}
          src="https://img.icons8.com/external-bearicons-glyph-bearicons/64/2ecc71/external-Tick-email-bearicons-glyph-bearicons.png"
        />
        <h1 className="text-2xl">
          Successfully sent <br />
          Thank you
        </h1>
      </div>
    </div>
  );
};

export default SuccessModal;
