export const TopUser = ({topUsers})=>{
  return (
    <>
      {topUsers.length !== 0 ? (
        <div className="bg-gray-100 p-4 rounded shadow-md">
          <h2 className="text-lg font-bold mb-2">Top Users</h2>
          {topUsers.map((user, index) => (
            <div key={index} className="text-gray-700 text-sm mb-2">
              <span className="font-semibold">{user.name}</span> (ID: {user.id})
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-gray-50 p-4 rounded shadow-md">
          <p className="text-gray-500 text-sm">Top users will be shown here</p>
        </div>
      )}
    </>
  );
}
