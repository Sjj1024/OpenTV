import { Button, Space } from 'antd-mobile'

function App() {
    return (
        <>
            <Space wrap align="center">
                <Button size="mini" color="primary">
                    Mini
                </Button>
                <Button size="small" color="primary">
                    Small
                </Button>
                <Button size="middle" color="primary">
                    Middle
                </Button>
                <Button size="large" color="primary">
                    Large
                </Button>
            </Space>
        </>
    )
}

export default App
