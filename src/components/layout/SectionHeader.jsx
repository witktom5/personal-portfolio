function SectionHeader({ title, alternateColor }) {
  return (
    <header>
      <h2
        className={`text-center mt-12 2xl:mt-16 text-4xl font-bold mb-14 lg:mb-20  ${
          alternateColor ? 'text-primary-content' : 'section-header'
        }`}
      >
        {title}
      </h2>
    </header>
  );
}
export default SectionHeader;
