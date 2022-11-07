export const Nav = () => {
  return (
    <nav className='flex items-center justify-between bg-indigo-500 px-2 shadow'>
      <div>
        <h1 className='text-2xl font-bold'>Euddem Index</h1>
      </div>
      <div>
        <input type='text' placeholder='search...' className='h-10 w-24' />
      </div>
    </nav>
  );
};
