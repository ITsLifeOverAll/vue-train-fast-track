<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <span class="navbar-item">
                <img src="/course-logo-white.png" alt="Logo">
            </span>

            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false"
                data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">

                <RouterLink to="/" class="navbar-item">
                    首頁
                </RouterLink>

                <RouterLink to="/products" class="navbar-item">
                    產品列表
                </RouterLink>

                <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link">
                        更多功能
                    </a>

                    <div class="navbar-dropdown">
                        <RouterLink to="/upvote" class="navbar-item">
                            投票功能 (響應能力)
                        </RouterLink>

                        <RouterLink to="/tabs" class="navbar-item">
                            頁籤功能 (動態元件)
                        </RouterLink>
                    </div>
                </div>

                <RouterLink to="/about" class="navbar-item">
                    關於我們
                </RouterLink>
            </div>

            <div class="navbar-end">
            </div>
        </div>
    </nav>
</template>
