import React from 'react';

const ReviewForm = () => {
    return (
        <div>
            <form>
                <div class="row mb-3">
                    <label for="inputEmail3" class="col-sm-2 col-form-label">Star</label>
                    <div class="col-sm-10">
                        <input type="email" class="form-control" id="inputEmail3" />
                    </div>
                </div>
                <div class="row mb-3">
                    <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                    <div class="col-sm-10">
                        <input type="email" class="form-control" id="inputEmail3" />
                    </div>
                </div>
                <div class="row mb-3">
                    <label for="inputPassword3" class="col-sm-2 col-form-label">Name</label>
                    <div class="col-sm-10">
                        <input type="password" class="form-control" id="inputPassword3" />
                    </div>
                </div>
                <div class="row mb-3">
                    <label for="exampleFormControlTextarea1" class="col-sm-2 col-form-label">Reviews</label>
                    <div class="col-sm-10">
                        <textarea class="form-control" id="exampleFormControlTextarea1"></textarea>

                    </div>
                </div>

                <button style={{ backgroundColor: '#fdbf70' }} type="submit" class="btn">Add Review</button>
            </form>

        </div>

    );
};

export default ReviewForm;