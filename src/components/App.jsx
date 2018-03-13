import React from 'react';
import Modal from 'ui/Modal';

let key = 0;

class App extends React.Component {
    state = {
        modal: null,
    };

    modals = [
        ({ number }) => <Modal>
            <Modal.Header>
                Modal One - {number}
            </Modal.Header>
            <Modal.Body>
                <button onClick={() => this.addOrReplaceModal()}>replace modal</button>
            </Modal.Body>
        </Modal>,
        ({ number }) => <Modal>
            <Modal.Header>
                Modal Two - {number}
            </Modal.Header>
            <Modal.Body>
                <button onClick={() => this.addOrReplaceModal()}>replace modal</button>
            </Modal.Body>
        </Modal>,
        ({ number }) => <Modal>
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
            modal: <NewModalComponent number={key}/>
        }));
    };

    render() {
        return (
            <div className="App">
                <Modal width={400}>
                    <Modal.Header>
                        Add Modal
                    </Modal.Header>
                    <Modal.Body>
                        <button onClick={() => this.addOrReplaceModal()}>add modal</button>
                    </Modal.Body>
                </Modal>
                {this.state.modal}
            </div>
        );
    }
}

export default App;
