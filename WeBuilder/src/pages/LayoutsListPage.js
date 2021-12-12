import React from 'react';
import Layout from '../components/Layout';
import Loading from '../components/Loading';


class LayoutsListPage extends React.Component {
    state = {
        layouts: [],
        loading: true,
    }

    componentDidMount() {
        fetch("/api/layouts")
            .then(res => res.json())
            .then(layouts => {
                this.setState({
                    loading: false,
                    layouts: layouts.map((p, ii) => <Layout {...p} key={ii} />),
                });
            })
            .catch(err => console.log("API ERROR: ", err));
    }

    render() {
        if (this.state.loading) {
            return <Loading />;
        }

        return (
            <div className="container-fluid text-center">
                <div className="row justify-content-center">
                    {this.state.layouts}
                </div>
            </div>
        );
    }
}

export default LayoutsListPage;