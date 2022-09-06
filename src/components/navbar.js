
function Navbar() {
    return (
        <div>

            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">IronHack Beers</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/">Beers</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/random-beer">Random Beers</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/new-beer">New Beers</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}


export default Navbar