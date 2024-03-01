export const Header: React.FC<{ length: number }> = ({ length }) => {
  const lenMessage = length === 0 ? "No invoices" : `${length} invoices`;

  return (
    <div>
      <h1 className="text-heading-m text-dark-navy dark:text-white">
        Invoices
      </h1>
      <p className="text-body text-slate-blue dark:text-white">{lenMessage}</p>
    </div>
  );
};
