import React from 'react';
import Modal from 'ui/Modal';

let key = 0;

class App extends React.Component {
    state = {
        modals: null,
    };

    modals = [
        ({ number, width }) => <Modal width={width}>
            <Modal.Header>
                Modal One - {number}
            </Modal.Header>
            <Modal.Body>
                <button onClick={() => this.addOrReplaceModal()}>replace modal</button>
            </Modal.Body>
        </Modal>,
        ({ number, width }) => <Modal width={width}>
            <Modal.Header>
                Modal Two - {number}
            </Modal.Header>
            <Modal.Body>
                <button onClick={() => this.addOrReplaceModal()}>replace modal</button>
            </Modal.Body>
        </Modal>,
        ({ number, width }) => <Modal width={width}>
            <Modal.Header>
                Modal Three - {number}
            </Modal.Header>
            <Modal.Body>
                <button onClick={() => this.addOrReplaceModal()}>replace modal</button>
            </Modal.Body>
        </Modal>
    ];

    addOrReplaceModal = () => {
        let NewModalComponent = this.modals[key++ % 3];

        this.setState(({
            modals: [
                <NewModalComponent number={key} key={'a' + key} width={500}/>,
                <NewModalComponent number={key} key={'b' + key} width={400}/>,
            ]
        }));
    };

    render() {
        return (
            <div className="App">
                "react": "0.14.7",
                "react-dom": "0.14.7"

                <Modal width={800}>
                    <Modal.Header>
                        Add Modal (REACT 0.14)
                    </Modal.Header>
                    <Modal.Body>
                        <button onClick={() => this.addOrReplaceModal()}>add modal</button>
                    </Modal.Body>
                </Modal>
                <Modal width={700}>
                    <Modal.Header>
                        Add Modal (REACT 0.14)
                    </Modal.Header>
                    <Modal.Body>
                        <button onClick={() => this.addOrReplaceModal()}>add modal</button>
                    </Modal.Body>
                </Modal>
                <Modal width={600}>
                    <Modal.Header>
                        Add Modal (REACT 0.14)
                    </Modal.Header>
                    <Modal.Body>
                        <button onClick={() => this.addOrReplaceModal()}>add modal</button>
                    </Modal.Body>
                </Modal>
                {this.state.modals}
            </div>
        );
    }
}

export default App;
