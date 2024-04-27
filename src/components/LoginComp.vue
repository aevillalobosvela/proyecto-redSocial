<template>
  <div>
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-4 col-sm-10">
          <div class="card border border-primary">
            <div class="card-header text-center">
              Login
              <div>
                <img src="../assets/logo.png" width="80" height="80" alt="" />
              </div>
            </div>
            <div class="card-body">
              <form>
                <div class="mb-3">
                  <label for="email" class="form-label">Email address</label>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                  />
                  <div id="emailHelp" class="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div class="mb-3">
                  <label for="password" class="form-label">Password</label>
                  <input type="password" class="form-control" id="password" />
                </div>
                <div class="mb-3 form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="remember"
                  />
                  <label class="form-check-label" for="remember"
                    >Remember me</label
                  >
                </div>
                <div class="text-center ">
                  <button class="btn btn-light border border-primary">
                    <router-link to="/about">About</router-link>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
