import Head from 'next/head'

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <Head>
        <title>WireDrive - Accueil</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold">Bienvenue sur WireDrive!</h1>
            </div>
            <div className="divide-y divide-gray-200">
              <p className="mt-6 text-2xl text-gray-500">Combinaison de charge sans fil et de stockage de données</p>
              <div className="mt-8">
                <div className="flex items-center">
                  <h2 className="ml-1 text-lg text-gray-500 font-semibold">
                    <a href="#features">Fonctionnalités</a>
                  </h2>
                </div>
                <p className="mt-2 text-sm text-gray-500">Découvrez ce qui fait de WireDrive un choix exceptionnel</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
