export default function HistoryPage() {
  return (
    <>
      <div>
        <h2 className="text-4xl font-bold text-gray-800 mb-6">About this site</h2>
        <p className="text-gray-600 text-lg">
          welcome to Airi world!<br />
          ここは私自身や私の日々の活動、作品についてまとまっているサイトです。<br />
          ぜひお楽しみください。
        </p>
      </div>
      {/* ここにいつかお気に入りPlaceつけたい */}
      <div>
        <h2 className="text-4xl font-bold text-gray-800 mb-6">What I Value Most</h2>
        <p className="text-gray-600 text-lg">
        <h3>&quot;挑戦こそ人生の楽しさ&quot;</h3>
        自分で考え、決断し、アクションを起こす、その結果として得られる経験と知識が人生を豊かにすると信じています。 <br/>
        そしてそれこそが、私の人生の楽しさです。<br/>
        私の人生をもっと知りたいですか？ <a href="/history" className="text-gray-600 hover:text-gray-900">→→Go</a> <br/>
        </p>
      </div>
      <div>
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Who is Airi?</h2>
      </div>  
    </>
  );
}
