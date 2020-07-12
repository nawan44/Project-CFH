import React from 'react';

class Sidebar extends React.Component {
    render() {
        return (
            <div>
                <aside class="main-sidebar">
                    <section class="sidebar">
                        <div class="user-panel">
                            <div class="pull-left image">
                                <img src="dist/img/user2-160x160.jpg" class="img-circle" alt="User Image" />
                            </div>
                            <div class="pull-left info">
                                <p>Alexander Pierce</p>
                                <a href="#"><i class="fa fa-circle text-success"></i> Online</a>
                            </div>
                        </div>
                        <form action="#" method="get" class="sidebar-form">
                            <div class="input-group">
                                <input type="text" name="q" class="form-control" placeholder="Search..." />
                                <span class="input-group-btn">
                                    <button type="submit" name="search" id="search-btn" class="btn btn-flat"><i class="fa fa-search"></i>
                                    </button>
                                </span>
                            </div>
                        </form>
                        <ul class="sidebar-menu" data-widget="tree">
                            <li class="header">MAIN NAVIGATION</li>
                            <li class="active treeview">
                                <a href="#">
                                    <i class="fa fa-dashboard"></i> <span>Dashboard</span>
                                    <span class="pull-right-container">
                                        <i class="fa fa-angle-left pull-right"></i>
                                    </span>
                                </a>
                                <ul class="treeview-menu">
                                    <li class="active"><a href="/category"><i class="fa fa-circle-o"></i> Category </a></li>
                                    <li><a href="/datacovid"><i class="fa fa-circle-o"></i> Data Covid</a></li>
                                </ul>
                            </li>
                            <li><a href="https://adminlte.io/docs"><i class="fa fa-book"></i> <span>Documentation</span></a></li>
                            <li class="header">LABELS</li>
                            <li><a href="#"><i class="fa fa-circle-o text-red"></i> <span>Important</span></a></li>
                            <li><a href="#"><i class="fa fa-circle-o text-yellow"></i> <span>Warning</span></a></li>
                            <li><a href="#"><i class="fa fa-circle-o text-aqua"></i> <span>Information</span></a></li>
                        </ul>
                    </section>
                </aside>
            </div>
        )
    }
}

export default Sidebar