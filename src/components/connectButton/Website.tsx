import Link from 'next/link'
import ConnectButton from '@/components/connectButton/Connectbutton';



function Website() {
    return (
        <div className="container">
            <main className="main">

                <h1 className="title hover:cursor-pointer shadow-xl shadow-gray-500 hover:shadow-orange-400">
                    Welcome On My First Dapp(Account Abstraction)
                </h1>

                <h3 className="description transition-all shadow-xl shadow-gray-500 hover:shadow-blue-400">Click here to link your account with My Dapp!</h3>
                <ConnectButton />
                <div className="grid">
                    <div className="card shadow-xl shadow-gray-500 hover:shadow-pink-400">
                        <Link target="_blank" href="https://www.facebook.com/profile.php?id=100088975870807">
                            <h2>Facebook</h2>
                        </Link>
                        <p>get my company to become genius.</p>
                    </div>

                    <div className="card shadow-xl shadow-gray-500 hover:shadow-pink-400">
                        <Link target="_blank" href="https://www.linkedin.com/in/rana-rabees-064830251/">
                            <h2>LinkedIn</h2>
                        </Link>
                        <p>get my company to become genius.</p>
                    </div>

                    <div className="card shadow-xl shadow-gray-500 hover:shadow-pink-400">
                        <Link target="_blank" href="https://discord.gg/dQbc6ySy">
                            <h2>Discord</h2>
                        </Link>
                        <p>get my company to become genius.</p>
                    </div>


                    <div className="card shadow-xl shadow-gray-500 hover:shadow-pink-400">
                        <Link target="_blank" href="https://twitter.com/RanaRabees">
                            <h2>Twitter</h2></Link>
                        <p>get my company to become genius.</p>
                    </div>


                </div>

            </main>
        </div>

    );
};

export default Website;