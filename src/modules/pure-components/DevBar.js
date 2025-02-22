const DevBar = ({ config }) => () => {

    return <dev-bar app-name={config.app.name}>
        <a target="_blank" href={config.app.issues}>Send feedback</a>
        <a target="_blank" href={config.app.source}>Source code</a>
    </dev-bar>

};

export default DevBar;
