import datetime
import json
import os
import re
import sys

import requests

trello_querystring_template = {
    "key": os.getenv("TRELLO_KEY"),
    "token": os.getenv("TRELLO_TOKEN")
}
todoist_token = os.getenv("TODOIST_TOKEN")


def get_todoist_tasks_by_project(project_id):
    url = f"https://api.todoist.com/rest/v1/tasks?project_id={project_id}"
    headers = {"Authorization": todoist_token}
    res = requests.request("GET", url, headers=headers)
    return json.loads(res.text)


def create_trello_card(name, desc):
    url = "https://api.trello.com/1/cards"
    querystring = {
        "idList": "5f7002eb7cd6457f3c87980a",
        "idLabels": "5f53ab66cdabcf46c0dc3caf",
        "name": name,
        "desc": desc
    }
    querystring.update(trello_querystring_template)
    requests.request("POST", url, params=querystring)


if __name__ == "__main__":
    err_list = []
    for task in get_todoist_tasks_by_project(2232195102):
        # print(task["content"])
        task = str(task["content"])
        m_title = re.search(r'\[(.*)\]', task)
        m_url = re.search(r'.*(http.*)', task)
        # マッチしなかった場合はNoneTypeになる
        if (m_title and m_url):
            title = m_title.group().strip("[").strip("]")
            url = m_url.group(1).strip(")")
        else:
            err_list.append(task)
        print(title, url)
        # create_trello_card(title, url)
    print(err_list)
