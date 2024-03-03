"use client";

export const Header: React.FC<{ length: number }> = ({ length }) => {
  const lenMessage = () => {
    if (length === 0) {
      return <p>{"No invoices"}</p>;
    } else {
      return (
        <>
          <p className="text-body text-slate-blue dark:text-pale-lavende block sm:hidden">{`${length} invoices`}</p>
          {/* Here no total -> status invoices... */}
          <p className="text-body text-slate-blue dark:text-pale-lavende hidden sm:block">{`There are ${length} total invoices`}</p>
        </>
      );
    }
  };
  return (
    <div className="flex flex-col gap-0.5 sm:gap-1.5">
      <h1 className="text-heading-m sm:text-heading-l text-dark-navy dark:text-white">
        Invoices
      </h1>
      {lenMessage()}
    </div>
  );
};

const InvoiceParagraph: React.FC<{ length: number }> = ({ length }) => {
  const lenMessage = () => {
    if (length === 0) {
      return <p>{"No invoices"}</p>;
    } else {
      return (
        <>
          <p className="block sm:hidden">{`${length} invoices`}</p>
          {/* Here no total -> status invoices... */}
          <p className="hidden sm:block">{`There are ${length} total invoices`}</p>
        </>
      );
    }
  };

  return (
    <>
      {length === 0 ? (
        <p>{"No invoices"}</p>
      ) : (
        <>
          <p className="block sm:hidden">{`${length} invoices`}</p>
          {/* Here no total -> status invoices... */}
          <p className="hidden sm:block">{`There are ${length} total invoices`}</p>
        </>
      )}
    </>
  );
};
