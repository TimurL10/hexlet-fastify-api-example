import { test } from 'node:test';
import * as assert from 'node:assert';
import { build } from '../../helper.js';
import { buildCourse, buildCourseLesson, buildUser } from '../../../lib/data.js'

test('get users', async (t) => {
    const app = await build(t);

    const res = await app.inject({
        url: 'api/users'
    })
    assert.equal(res.statusCode, 200, res.body)
})

test('get user by id', async (t) => {
    const app = await build(t);

    const user = await app.db.query.users.findFirst();
    assert.ok(user);

    const res = await app.inject({
        url: `api/users/${user.id}`
    })
    assert.equal(res.statusCode, 200, res.body)
})

test('create user', async(t) => {
    const app = await build(t);
    const body = await buildUser();

    const res = await app.inject({
        url: `api/users`,
        method: 'post',
        body: body
    })
    assert.equal(res.statusCode, 201, res.body)

})

test('edit user', async (t) => {
    const app = await build(t);
    const user = await app.db.query.users.findFirst();
    assert.ok(user);

    const res = await app.inject({
        url: `api/users/${user.id}`,
        method: 'delete'
    })
    assert.equal(res.statusCode, 204, res.body)
})

test('delete user', async (t) => {

})