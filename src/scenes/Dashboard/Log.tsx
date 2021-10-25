import React, { FC, useState} from 'react';

const proxy = "pre-de-infinity-supply.eu:231231:asd2131dasd2131231wd:123basda21312asd"

const Log: FC = () => {

    const [proxies, setProxies] = useState<Array<string>>([proxy])

    const generateProxies = () => {
        setProxies(Array(6).fill(proxy))
    }

    const clear = () => {
        setProxies([])
    }

    const copy = () => {
        navigator.clipboard.writeText(proxies.join("\n"))
    }

    return (
        <div className="proxies">
            <div className="dashboard-card log">
                <p>
                    {proxies.map((pr,idx) => <span className="d-block" key={idx}>{pr}</span>)}
                </p>
            </div>

            <div className="buttons w-100">
                <button onClick={generateProxies}>Generate Proxies</button>
                <button onClick={copy}>Copy Proxies</button>
                <button onClick={clear}>Clear Proxies</button>
                <button>Export Proxies</button>
            </div>
        </div>
        
    )
}

export default Log;
