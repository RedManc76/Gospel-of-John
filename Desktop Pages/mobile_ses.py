#!/usr/bin/env python3
"""
Script to convert session data from txt format to HTML format
Based on the Gospel of John video commentary series structure
"""

import re
import os
from typing import List, Dict, Any
import math

class SessionConverter:
    def __init__(self):
        self.session_data = {
            'video_id': '',
            'title': '',
            'reading': '',
            'reading_text': '',
            'open_prayer': '',
            'chapters': [],
            'chapter_time': [],
            'terms': [],
            'meditate_questions': [],
            'close_prayer': '',
            'further_links': [],
            'sermon_links': []
        }
        
    def parse_txt_file(self, txt_content: str) -> Dict[str, Any]:
        """Parse the txt file content and extract session data"""
        lines = txt_content.strip().split('\n')
        
        for line in lines:
            line = line.strip()
            if not line or line.startswith('//'):
                continue
                
            # Parse different function calls
            if 'add_main_video(' in line:
                video_id = self._extract_quoted_value(line, 1)
                self.session_data['video_id'] = video_id
                
            elif 'add_video_title(' in line:
                title = self._extract_quoted_value(line, 1)
                self.session_data['title'] = title
                
            elif 'add_reading(' in line:
                reading = self._extract_quoted_value(line, 1)
                self.session_data['reading'] = reading

            elif 'add_reading_text(' in line:
                reading = self._extract_quoted_value(line, 1)
                self.session_data['reading_text'] = reading
                
            elif 'add_open_prayer(' in line:
                prayer = self._extract_quoted_value(line, 1)
                self.session_data['open_prayer'] = prayer
                
            elif 'add_watch_title(' in line:
                current_section = 'chapters'
                
            elif 'add_watch_topic(' in line:
                topic = self._extract_quoted_value(line, 1)
                self.session_data['chapters'].append(topic)
                
            elif 'add_watch_term(' in line:
                term = self._extract_quoted_value(line, 1)
                self.session_data['terms'].append(term)
                
            elif 'add_meditate_question(' in line:
                question = self._extract_quoted_value(line, 1)
                self.session_data['meditate_questions'].append(question)
                
            elif 'add_close_prayer(' in line:
                prayer = self._extract_quoted_value(line, 1)
                self.session_data['close_prayer'] = prayer
            
            elif 'add_further_title(' in line:
                further_selector = self._extract_apostrophe_value(line, 1)

            elif 'add_further_link(' in line:
                url = self._extract_apostrophe_value(line, 1)
                title = self._extract_apostrophe_value(line, 2)
                if further_selector == 'Links to Further Study':
                    self.session_data['further_links'].append({'url': url, 'title': title})
                else:
                    self.session_data['sermon_links'].append({'url': url, 'title': title})
        return self.session_data
    
    def _extract_quoted_value(self, line: str, position: int) -> str:
        """Extract quoted values from function calls"""
        # Find all quoted strings in the line
        matches = re.findall(r'"([^"]*)"', line)
        if len(matches) >= position:
            return matches[position - 1]
        return ""
    
    def _extract_apostrophe_value(self, line: str, position: int) -> str:
        """Extract quoted values from function calls"""
        # Find all quoted strings in the line
        matches = re.findall(r"'([^']*)'", line)
        if len(matches) >= position:
            return matches[position - 1]
        return ""

    def generate_css(self, session_num: int, data: Dict[str, Any]) -> str:

        css_template = f'''body::before {{background-image: url("../Images/background/bible_dark.webp");}}'''
        return css_template


    def generate_html(self, session_num: int, data: Dict[str, Any]) -> str:
        """Generate HTML content from session data"""
        
        # Extract chapter information
        chapters = []
        for i, topic in enumerate(data['chapters'], 1):
            chapters.append({
                'id': f'chapter{i}',
                'title': topic.split(' - ')[0] if ' - ' in topic else topic,
                'time': topic.split(' - ')[1] if ' - ' in topic else ''
            })
        
        html_template = f'''<!DOCTYPE html>

<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>The Gospel of John</title>
  <meta name="description" content="Video Commentary series on the Gospel of John">
  <meta name="keywords" content="The Gospel, Gospel of John, Video Commentary, Bible Commentary, Jesus Christ">
  <meta name="author" content="Society for Biblical Reformation">
  <meta name="doc-type" content="Session">

  <link rel="stylesheet" href="../Styles/menu.css" />
  <link rel="stylesheet" href="../Styles/session_mob.css">
  <link rel="stylesheet" href="../Styles/session{session_num}_mob.css">
  <link rel="stylesheet" href="../Styles/youtube.css" />

</head>

<body>

  <div class="menu-container">
    <div class="desktop-menu">

      <img src="../Images/close.webp" class="icon-close">

      <div class="option-container">
        <div class="option-item"><img src="../Images/button_green_header.png" .alt="selected by session"
            id="option-session">
          <h1>Session</h1>
        </div>
        <div class="option-item"><img src="../Images/button_red_header.png" .alt="selected by chapter"
            id="option-chapter">
          <h1>chapter</h1>
        </div>
        <div class="option-item"><img src="../Images/button_blue_header.png" .alt="selected by topic" id="option-topic">
          <h1>Topic</h1>
        </div>
        <div class="option-item"><img src="../Images/button_yellow_header.png" .alt="About" id="option-about">
          <h1>About</h1>
        </div>
      </div>

      <div class="chapter-main-container">
        <div class="chapter-container">
          <div class="chapter-item"><img src="../Images/index_intro_button.png" .alt="chapter 1" id="chapter-1">
            <h1>1</h1>
          </div>
          <div class="chapter-item"><img src="../Images/index_intro_button.png" .alt="chapter 2" id="chapter-2">
            <h1>2</h1>
          </div>
          <div class="chapter-item"><img src="../Images/index_intro_button.png" .alt="chapter 3" id="chapter-3">
            <h1>3</h1>
          </div>
          <div class="chapter-item"><img src="../Images/index_intro_button.png" .alt="chapter 4" id="chapter-4">
            <h1>4</h1>
          </div>
          <div class="chapter-item"><img src="../Images/index_intro_button.png" .alt="chapter 5" id="chapter-5">
            <h1>5</h1>
          </div>
          <div class="chapter-item"><img src="../Images/index_intro_button.png" .alt="chapter 6" id="chapter-6">
            <h1>6</h1>
          </div>
          <div class="chapter-item"><img src="../Images/index_intro_button.png" .alt="chapter 7" id="chapter-7">
            <h1>7</h1>
          </div>
          <div class="chapter-item"><img src="../Images/index_intro_button.png" .alt="chapter 8" id="chapter-8">
            <h1>8</h1>
          </div>
          <div class="chapter-item"><img src="../Images/index_intro_button.png" .alt="chapter 9" id="chapter-9">
            <h1>9</h1>
          </div>
          <div class="chapter-item"><img src="../Images/index_intro_button.png" .alt="chapter 10" id="chapter-10">
            <h1>10</h1>
          </div>
          <div class="chapter-item"><img src="../Images/index_intro_button.png" .alt="chapter 11" id="chapter-11">
            <h1>11</h1>
          </div>
          <div class="chapter-item"><img src="../Images/index_intro_button.png" .alt="chapter 12" id="chapter-12">
            <h1>12</h1>
          </div>
          <div class="chapter-item"><img src="../Images/index_intro_button.png" .alt="chapter 13" id="chapter-13">
            <h1>13</h1>
          </div>
          <div class="chapter-item"><img src="../Images/index_intro_button.png" .alt="chapter 14" id="chapter-14">
            <h1>14</h1>
          </div>
          <div class="chapter-item"><img src="../Images/index_intro_button.png" .alt="chapter 15" id="chapter-15">
            <h1>15</h1>
          </div>
          <div class="chapter-item"><img src="../Images/index_intro_button.png" .alt="chapter 16" id="chapter-16">
            <h1>16</h1>
          </div>
          <div class="chapter-item"><img src="../Images/index_intro_button.png" .alt="chapter 17" id="chapter-17">
            <h1>17</h1>
          </div>
          <div class="chapter-item"><img src="../Images/index_intro_button.png" .alt="chapter 18" id="chapter-18">
            <h1>18</h1>
          </div>
          <div class="chapter-item"><img src="../Images/index_intro_button.png" .alt="chapter 19" id="chapter-19">
            <h1>19</h1>
          </div>
          <div class="chapter-item"><img src="../Images/index_intro_button.png" .alt="chapter 20" id="chapter-20">
            <h1>20</h1>
          </div>
          <div class="chapter-item"><img src="../Images/index_intro_button.png" .alt="chapter 21" id="chapter-21">
            <h1>21</h1>
          </div>
        </div>
        <div class="chapter-1-sub-container">
          <div class="chapter-sub-item"><img src="../Images/index_intro_button.png" .alt="chapter 1 1">
            <header id="chapter-1-1"></header>
            <h1>Chapter 1:1-3</h1>
          </div>
          <div class="chapter-sub-item"><img src="../Images/index_intro_button.png" .alt="chapter 1 2">
            <header id="chapter-1-2"></header>
            <h1>Chapter 1:3-8</h1>
          </div>
          <div class="chapter-sub-item"><img src="../Images/index_intro_button.png" .alt="chapter 1 3">
            <header id="chapter-1-3"></header>
            <h1>Chapter 1:9-13</h1>
          </div>
          <div class="chapter-sub-item"><img src="../Images/index_intro_button.png" .alt="chapter 1 4">
            <header id="chapter-1-4"></header>
            <h1>Chapter 1:14-18</h1>
          </div>
          <div class="chapter-sub-item"><img src="../Images/index_intro_button.png" .alt="chapter 1 5">
            <header id="chapter-1-5"></header>
            <h1>Chapter 1:19-34</h1>
          </div>
          <div class="chapter-sub-item"><img src="../Images/index_intro_button.png" .alt="chapter 1 6">
            <header id="chapter-1-6"></header>
            <h1>chapter 1:34-51</h1>
          </div>
        </div>
        <div class="chapter-2-sub-container">
          <div class="chapter-sub-item"><img src="../Images/index_intro_button.png" .alt="chapter 2 1">
            <header id="chapter-2-1"></header>
            <h1>Chapter 2:1-12</h1>
          </div>
          <div class="chapter-sub-item"><img src="../Images/index_intro_button.png" .alt="chapter 2 2">
            <header id="chapter-2-2"></header>
            <h1>Chapter 2:13-25</h1>
          </div>
        </div>
        <div class="chapter-3-sub-container">
          <div class="chapter-sub-item"><img src="../Images/index_intro_button.png" .alt="chapter 3 1">
            <header id="chapter-3-1"></header>
            <h1>Chapter 3:1-15</h1>
          </div>
          <div class="chapter-sub-item"><img src="../Images/index_intro_button.png" .alt="chapter 3 2">
            <header id="chapter-3-2"></header>
            <h1>Chapter 3:16-21</h1>
          </div>
          <div class="chapter-sub-item third-item"><img src="../Images/index_intro_button.png" .alt="chapter 3 3">
            <header id="chapter-3-3"></header>
            <h1>Chapter 3:22-36</h1>
          </div>
        </div>
        <div class="chapter-4-sub-container">
          <div class="chapter-sub-item"><img src="../Images/index_intro_button.png" .alt="chapter 4 1">
            <header id="chapter-4-1"></header>
            <h1>Chapter 4:1-26</h1>
          </div>
          <div class="chapter-sub-item"><img src="../Images/index_intro_button.png" .alt="chapter 4 2">
            <header id="chapter-4-2"></header>
            <h1>Chapter 4:27-45</h1>
          </div>
          <div class="chapter-sub-item third-item"><img src="../Images/index_intro_button.png" .alt="chapter 4 3">
            <header id="chapter-4-3"></header>
            <h1>Chapter 4:46-53</h1>
          </div>
        </div>
        <div class="chapter-5-sub-container">
          <div class="chapter-sub-item"><img src="../Images/index_intro_button.png" .alt="chapter 5 1">
            <header id="chapter-5-1"></header>
            <h1>Chapter 5:1-17</h1>
          </div>
          <div class="chapter-sub-item"><img src="../Images/index_intro_button.png" .alt="chapter 5 2">
            <header id="chapter-5-2"></header>
            <h1>Chapter 5:18-29</h1>
          </div>
          <div class="chapter-sub-item third-item"><img src="../Images/index_intro_button.png" .alt="chapter 5 3">
            <header id="chapter-5-3"></header>
            <h1>Chapter 5:30-47</h1>
          </div>
        </div>
        <div class="chapter-6-sub-container">
          <div class="chapter-sub-item"><img src="../Images/index_intro_button.png" .alt="chapter 6 1">
            <header id="chapter-6-1"></header>
            <h1>Chapter 6:1-21</h1>
          </div>
          <div class="chapter-sub-item"><img src="../Images/index_intro_button.png" .alt="chapter 6 2">
            <header id="chapter-6-2"></header>
            <h1>Chapter 6:22-59</h1>
          </div>
          <div class="chapter-sub-item third-item"><img src="../Images/index_intro_button.png" .alt="chapter 6 3">
            <header id="chapter-6-3"></header>
            <h1>Chapter 6:52-71</h1>
          </div>
        </div>
        <div class="chapter-7-sub-container">
          <div class="chapter-sub-item"><img src="../Images/index_intro_button.png" .alt="chapter 7 1">
            <header id="chapter-7-1"></header>
            <h1>Chapter 7:1-24</h1>
          </div>
          <div class="chapter-sub-item"><img src="../Images/index_intro_button.png" .alt="chapter 7 2">
            <header id="chapter-7-2"></header>
            <h1>Chapter 7:25-53</h1>
          </div>
        </div>
        <div class="chapter-8-sub-container">
          <div class="chapter-sub-item"><img src="../Images/index_intro_button.png" .alt="chapter 8 1">
            <header id="chapter-8-1"></header>
            <h1>Chapter 8:1-11</h1>
          </div>
          <div class="chapter-sub-item"><img src="../Images/index_intro_button.png" .alt="chapter 8 2">
            <header id="chapter-8-2"></header>
            <h1>Chapter 8:12-38</h1>
          </div>
          <div class="chapter-sub-item third-item"><img src="../Images/index_intro_button.png" .alt="chapter 8 3">
            <header id="chapter-8-3"></header>
            <h1>Chapter 8:39-59</h1>
          </div>
        </div>
        <div class="chapter-9-sub-container">
          <div class="chapter-sub-item third-item"><img src="../Images/index_intro_button.png" .alt="chapter 9 1">
            <header id="chapter-9-1"></header>
            <h1>Chapter 9:1-41</h1>
          </div>
        </div>
        <div class="chapter-10-sub-container">
          <div class="chapter-sub-item"><img src="../Images/index_intro_button.png" .alt="chapter 10 1">
            <header id="chapter-10-1"></header>
            <h1>Chapter 10:1-21</h1>
          </div>
          <div class="chapter-sub-item"><img src="../Images/index_intro_button.png" .alt="chapter 10 2">
            <header id="chapter-10-2"></header>
            <h1>Chapter 10:22-42</h1>
          </div>
        </div>
        <div class="chapter-11-sub-container">
          <div class="chapter-sub-item"><img src="../Images/index_intro_button.png" .alt="chapter 11 1">
            <header id="chapter-11-1"></header>
            <h1>Chapter 11:1-27</h1>
          </div>
          <div class="chapter-sub-item"><img src="../Images/index_intro_button.png" .alt="chapter 11 2">
            <header id="chapter-11-2"></header>
            <h1>Chapter 11:28-57</h1>
          </div>
        </div>
        <div class="chapter-12-sub-container">
          <div class="chapter-sub-item"><img src="../Images/index_intro_button.png" .alt="chapter 12 1">
            <header id="chapter-12-1"></header>
            <h1>Chapter 12:1-19</h1>
          </div>
          <div class="chapter-sub-item"><img src="../Images/index_intro_button.png" .alt="chapter 12 2">
            <header id="chapter-12-2"></header>
            <h1>Chapter 12:20-50</h1>
          </div>
        </div>
        <div class="chapter-13-sub-container">
          <div class="chapter-sub-item"><img src="../Images/index_intro_button.png" .alt="chapter 13 1">
            <header id="chapter-13-1"></header>
            <h1>Chapter 13:1-20</h1>
          </div>
          <div class="chapter-sub-item"><img src="../Images/index_intro_button.png" .alt="chapter 13 2">
            <header id="chapter-13-2"></header>
            <h1>Chapter 13:21-38</h1>
          </div>
        </div>
        <div class="chapter-14-sub-container">
          <div class="chapter-sub-item"><img src="../Images/index_intro_button.png" .alt="chapter 14 1">
            <header id="chapter-14-1"></header>
            <h1>Chapter 14:1-14</h1>
          </div>
          <div class="chapter-sub-item"><img src="../Images/index_intro_button.png" .alt="chapter 14 2">
            <header id="chapter-14-2"></header>
            <h1>Chapter 14:15-31</h1>
          </div>
        </div>
        <div class="chapter-15-sub-container">
          <div class="chapter-sub-item"><img src="../Images/index_intro_button.png" .alt="chapter 15 1">
            <header id="chapter-15-1"></header>
            <h1>Chapter 15:1-17</h1>
          </div>
          <div class="chapter-sub-item"><img src="../Images/index_intro_button.png" .alt="chapter 15 2">
            <header id="chapter-15-2"></header>
            <h1>Chapter 15:18-27</h1>
          </div>
        </div>
        <div class="chapter-16-sub-container">
          <div class="chapter-sub-item"><img src="../Images/index_intro_button.png" .alt="chapter 16 1">
            <header id="chapter-16-1"></header>
            <h1>Chapter 16:1-15</h1>
          </div>
          <div class="chapter-sub-item"><img src="../Images/index_intro_button.png" .alt="chapter 16 2">
            <header id="chapter-16-2"></header>
            <h1>Chapter 16:16-33</h1>
          </div>
        </div>
        <div class="chapter-17-sub-container">
          <div class="chapter-sub-item"><img src="../Images/index_intro_button.png" .alt="chapter 17 1">
            <header id="chapter-17-1"></header>
            <h1>Chapter 17:1-26</h1>
          </div>
        </div>
        <div class="chapter-18-sub-container">
          <div class="chapter-sub-item"><img src="../Images/index_intro_button.png" .alt="chapter 18 1">
            <header id="chapter-18-1"></header>
            <h1>Chapter 18:1-24</h1>
          </div>
          <div class="chapter-sub-item"><img src="../Images/index_intro_button.png" .alt="chapter 18 2">
            <header id="chapter-18-2"></header>
            <h1>Chapter 18:25-39</h1>
          </div>
        </div>
        <div class="chapter-19-sub-container">
          <div class="chapter-sub-item"><img src="../Images/index_intro_button.png" .alt="chapter 19 1">
            <header id="chapter-19-1"></header>
            <h1>Chapter 19:1-16</h1>
          </div>
          <div class="chapter-sub-item"><img src="../Images/index_intro_button.png" .alt="chapter 19 2">
            <header id="chapter-19-2"></header>
            <h1>Chapter 19:17-27</h1>
          </div>
          <div class="chapter-sub-item third-item"><img src="../Images/index_intro_button.png" .alt="chapter 19 3">
            <header id="chapter-19-3"></header>
            <h1>Chapter 19:28-42</h1>
          </div>
        </div>
        <div class="chapter-20-sub-container">
          <div class="chapter-sub-item"><img src="../Images/index_intro_button.png" .alt="chapter 20 1">
            <header id="chapter-20-1"></header>
            <h1>Chapter 20:1-10</h1>
          </div>
          <div class="chapter-sub-item"><img src="../Images/index_intro_button.png" .alt="chapter 20 2">
            <header id="chapter-20-2"></header>
            <h1>Chapter 20:11-31</h1>
          </div>
        </div>
        <div class="chapter-21-sub-container">
          <div class="chapter-sub-item"><img src="../Images/index_intro_button.png" .alt="chapter 21 1">
            <header id="chapter-21-1"></header>
            <h1>Chapter 21:1-25</h1>
          </div>
          <div class="chapter-sub-item"><img src="../Images/index_intro_button.png" .alt="chapter 21 2">
            <header id="chapter-21-2"></header>
            <h1>Summary</h1>
          </div>
        </div>
      </div>

      <div class="session-container">
        <div class="session-item"><img src="../Images/index_intro_button.png" .alt="Session 1" id="session-1">
          <h1>1</h1>
        </div>
        <div class="session-item"><img src="../Images/index_intro_button.png" .alt="Session 2" id="session-2">
          <h1>2</h1>
        </div>
        <div class="session-item"><img src="../Images/index_intro_button.png" .alt="Session 3" id="session-3">
          <h1>3</h1>
        </div>
        <div class="session-item"><img src="../Images/index_intro_button.png" .alt="Session 4" id="session-4">
          <h1>4</h1>
        </div>
        <div class="session-item"><img src="../Images/index_intro_button.png" .alt="Session 5" id="session-5">
          <h1>5</h1>
        </div>
        <div class="session-item"><img src="../Images/index_intro_button.png" .alt="Session 6" id="session-6">
          <h1>6</h1>
        </div>
        <div class="session-item"><img src="../Images/index_intro_button.png" .alt="Session 7" id="session-7">
          <h1>7</h1>
        </div>
        <div class="session-item"><img src="../Images/index_intro_button.png" .alt="Session 8" id="session-8">
          <h1>8</h1>
        </div>
        <div class="session-item"><img src="../Images/index_intro_button.png" .alt="Session 9" id="session-9">
          <h1>9</h1>
        </div>
        <div class="session-item"><img src="../Images/index_intro_button.png" .alt="Session 10" id="session-10">
          <h1>10</h1>
        </div>

        <div class="session-item"><img src="../Images/index_intro_button.png" .alt="Session 11" id="session-11">
          <h1>11</h1>
        </div>
        <div class="session-item"><img src="../Images/index_intro_button.png" .alt="Session 12" id="session-12">
          <h1>12</h1>
        </div>
        <div class="session-item"><img src="../Images/index_intro_button.png" .alt="Session 13" id="session-13">
          <h1>13</h1>
        </div>
        <div class="session-item"><img src="../Images/index_intro_button.png" .alt="Session 14" id="session-14">
          <h1>14</h1>
        </div>
        <div class="session-item"><img src="../Images/index_intro_button.png" .alt="Session 15" id="session-15">
          <h1>15</h1>
        </div>
        <div class="session-item"><img src="../Images/index_intro_button.png" .alt="Session 16" id="session-16">
          <h1>16</h1>
        </div>
        <div class="session-item"><img src="../Images/index_intro_button.png" .alt="Session 17" id="session-17">
          <h1>17</h1>
        </div>
        <div class="session-item"><img src="../Images/index_intro_button.png" .alt="Session 18" id="session-18">
          <h1>18</h1>
        </div>
        <div class="session-item"><img src="../Images/index_intro_button.png" .alt="Session 19" id="session-19">
          <h1>19</h1>
        </div>
        <div class="session-item"><img src="../Images/index_intro_button.png" .alt="Session 20" id="session-20">
          <h1>20</h1>
        </div>

        <div class="session-item"><img src="../Images/index_intro_button.png" .alt="Session 21" id="session-21">
          <h1>21</h1>
        </div>
        <div class="session-item"><img src="../Images/index_intro_button.png" .alt="Session 22" id="session-22">
          <h1>22</h1>
        </div>
        <div class="session-item"><img src="../Images/index_intro_button.png" .alt="Session 23" id="session-23">
          <h1>23</h1>
        </div>
        <div class="session-item"><img src="../Images/index_intro_button.png" .alt="Session 24" id="session-24">
          <h1>24</h1>
        </div>
        <div class="session-item"><img src="../Images/index_intro_button.png" .alt="Session 25" id="session-25">
          <h1>25</h1>
        </div>
        <div class="session-item"><img src="../Images/index_intro_button.png" .alt="Session 26" id="session-26">
          <h1>26</h1>
        </div>
        <div class="session-item"><img src="../Images/index_intro_button.png" .alt="Session 27" id="session-27">
          <h1>27</h1>
        </div>
        <div class="session-item"><img src="../Images/index_intro_button.png" .alt="Session 28" id="session-28">
          <h1>28</h1>
        </div>
        <div class="session-item"><img src="../Images/index_intro_button.png" .alt="Session 29" id="session-29">
          <h1>29</h1>
        </div>
        <div class="session-item"><img src="../Images/index_intro_button.png" .alt="Session 30" id="session-30">
          <h1>30</h1>
        </div>

        <div class="session-item"><img src="../Images/index_intro_button.png" .alt="Session 31" id="session-31">
          <h1>31</h1>
        </div>
        <div class="session-item"><img src="../Images/index_intro_button.png" .alt="Session 32" id="session-32">
          <h1>32</h1>
        </div>
        <div class="session-item"><img src="../Images/index_intro_button.png" .alt="Session 33" id="session-33">
          <h1>33</h1>
        </div>
        <div class="session-item"><img src="../Images/index_intro_button.png" .alt="Session 34" id="session-34">
          <h1>34</h1>
        </div>
        <div class="session-item"><img src="../Images/index_intro_button.png" .alt="Session 35" id="session-35">
          <h1>35</h1>
        </div>
        <div class="session-item"><img src="../Images/index_intro_button.png" .alt="Session 36" id="session-36">
          <h1>36</h1>
        </div>
        <div class="session-item"><img src="../Images/index_intro_button.png" .alt="Session 37" id="session-37">
          <h1>37</h1>
        </div>
        <div class="session-item"><img src="../Images/index_intro_button.png" .alt="Session 38" id="session-38">
          <h1>38</h1>
        </div>
        <div class="session-item"><img src="../Images/index_intro_button.png" .alt="Session 39" id="session-39">
          <h1>39</h1>
        </div>
        <div class="session-item"><img src="../Images/index_intro_button.png" .alt="Session 40" id="session-40">
          <h1>40</h1>
        </div>

        <div class="session-item"><img src="../Images/index_intro_button.png" .alt="Session 41" id="session-41">
          <h1>41</h1>
        </div>
        <div class="session-item"><img src="../Images/index_intro_button.png" .alt="Session 42" id="session-42">
          <h1>42</h1>
        </div>
        <div class="session-item"><img src="../Images/index_intro_button.png" .alt="Session 43" id="session-43">
          <h1>43</h1>
        </div>
        <div class="session-item"><img src="../Images/index_intro_button.png" .alt="Session 44" id="session-44">
          <h1>44</h1>
        </div>
        <div class="session-item"><img src="../Images/index_intro_button.png" .alt="Session 45" id="session-45">
          <h1>45</h1>
        </div>
        <div class="session-item"><img src="../Images/index_intro_button.png" .alt="Session 46" id="session-46">
          <h1>46</h1>
        </div>
        <div class="session-item"><img src="../Images/index_intro_button.png" .alt="Session 47" id="session-47">
          <h1>47</h1>
        </div>
        <div class="session-item"><img src="../Images/index_intro_button.png" .alt="Session 48" id="session-48">
          <h1>48</h1>
        </div>
        <div class="session-item"><img src="../Images/index_intro_button.png" .alt="Session 49" id="session-49">
          <h1>49</h1>
        </div>
        <div class="session-item"><img src="../Images/index_intro_button.png" .alt="Session 50" id="session-50">
          <h1>50</h1>
        </div>
      </div>

      <div class="topic-container">
        <div class="topic-item"><img src="../Images/index_intro_button.png" alt="topic 1" id="topic-1">
          <header id="topic-1-banner"></header>
          <h1 id="topic-1-text">1</h1>
        </div>
        <div class="topic-item"><img src="../Images/index_intro_button.png" alt="topic 2" id="topic-2">
          <header id="topic-2-banner"></header>
          <h1 id="topic-2-text">2</h1>
        </div>
        <div class="topic-item"><img src="../Images/index_intro_button.png" alt="topic 3" id="topic-3">
          <header id="topic-3-banner"></header>
          <h1 id="topic-3-text">3</h1>
        </div>
        <div class="topic-item"><img src="../Images/index_intro_button.png" alt="topic 4" id="topic-4">
          <header id="topic-4-banner"></header>
          <h1 id="topic-4-text">4</h1>
        </div>
        <div class="topic-item"><img src="../Images/index_intro_button.png" alt="topic 5" id="topic-5">
          <header id="topic-5-banner"></header>
          <h1 id="topic-5-text">5</h1>
        </div>
        <div class="topic-item"><img src="../Images/index_intro_button.png" alt="topic 6" id="topic-6">
          <header id="topic-6-banner"></header>
          <h1 id="topic-6-text">6</h1>
        </div>
        <div class="topic-item"><img src="../Images/index_intro_button.png" alt="topic 7" id="topic-7">
          <header id="topic-7-banner"></header>
          <h1 id="topic-7-text">7</h1>
        </div>
        <div class="topic-item"><img src="../Images/index_intro_button.png" alt="topic 8" id="topic-8">
          <header id="topic-8-banner"></header>
          <h1 id="topic-8-text">8</h1>
        </div>
        <div class="topic-item"><img src="../Images/index_intro_button.png" alt="topic 9" id="topic-9">
          <header id="topic-9-banner"></header>
          <h1 id="topic-9-text">9</h1>
        </div>
        <div class="topic-item"><img src="../Images/index_intro_button.png" alt="topic 10" id="topic-10">
          <header id="topic-10-banner"></header>
          <h1 id="topic-10-text">10</h1>
        </div>
        <div class="topic-item"><img src="../Images/index_intro_button.png" alt="topic 11" id="topic-11">
          <header id="topic-11-banner"></header>
          <h1 id="topic-11-text">11</h1>
        </div>
        <div class="topic-item"><img src="../Images/index_intro_button.png" alt="topic 12" id="topic-12">
          <header id="topic-12-banner"></header>
          <h1 id="topic-12-text">12</h1>
        </div>
        <div class="topic-item"><img src="../Images/index_intro_button.png" alt="topic 13" id="topic-13">
          <header id="topic-13-banner"></header>
          <h1 id="topic-13-text">13</h1>
        </div>
        <div class="topic-item"><img src="../Images/index_intro_button.png" alt="topic 14" id="topic-14">
          <header id="topic-14-banner"></header>
          <h1 id="topic-14-text">14</h1>
        </div>
        <div class="topic-item"><img src="../Images/index_intro_button.png" alt="topic 15" id="topic-15">
          <header id="topic-15-banner"></header>
          <h1 id="topic-15-text">15</h1>
        </div>
        <div class="topic-item"><img src="../Images/index_intro_button.png" alt="topic 16" id="topic-16">
          <header id="topic-16-banner"></header>
          <h1 id="topic-16-text">16</h1>
        </div>
        <div class="topic-item"><img src="../Images/index_intro_button.png" alt="topic 17" id="topic-17">
          <header id="topic-17-banner"></header>
          <h1 id="topic-17-text">17</h1>
        </div>
        <div class="topic-item"><img src="../Images/index_intro_button.png" alt="topic 18" id="topic-18">
          <header id="topic-18-banner"></header>
          <h1 id="topic-18-text">18</h1>
        </div>
      </div>

      <div class="about-container">
        <div class="about-item">
          <h1>Society for Biblical Reformation</h1>
        </div>
        <a href="https://www.biblicalreformation.com">www.biblicalreformation.com</a>
        <div class="about-space"></div>
        <div class="about-item">
          <h2>email questions and comments to:</h2>
        </div>
        <div class="about-item">
          <h1>biblicalreformation@gmail.com</h1>
        </div>
      </div>

    </div>

    <div class="mobile-menu">
      <div class="burger-container">
        <div id="burger">
          <div class="bar topBar"></div>
          <div class="bar btmBar"></div>
        </div>
      </div>
      <ul class="menu">
        <li class="mobile_menu-item">Session
          <ul class="mobile_submenu">
            <li class="mobile_submenu-item"><a href="../Mobile Pages/session1_mob.html">1 - The Word</a></li>
            <li class="mobile_submenu-item"><a href="../Mobile Pages/session2_mob.html">2 - Light of the
                world</a>
            </li>
            <li class="mobile_submenu-item"><a href="../Mobile Pages/session3_mob.html">3 - The plan of
                salvation</a></li>
            <li class="mobile_submenu-item"><a href="../Mobile Pages/session4_mob.html">4 - The Word became
                flesh</a></li>
            <li class="mobile_submenu-item"><a href="../Mobile Pages/session5_mob.html">5 - The Lamb of God</a>
            </li>
            <li class="mobile_submenu-item"><a href="../Mobile Pages/session6_mob.html">6 - The Disciples</a>
            </li>
            <li class="mobile_submenu-item"><a href="../Mobile Pages/session7_mob.html">7 - First Miracle</a>
            </li>
            <li class="mobile_submenu-item"><a href="../Mobile Pages/session8_mob.html">8 - Cleansing the
                Temple</a></li>
            <li class="mobile_submenu-item"><a href="../Mobile Pages/session9_mob.html">9 - You must be born
                again</a></li>
            <li class="mobile_submenu-item"><a href="../Mobile Pages/session10_mob.html">10 - God so loved the
                world</a></li>
            <li class="mobile_submenu-item"><a href="../Mobile Pages/session11_mob.html">11 - Supremecy of Jesus
                Christ</a></li>
            <li class="mobile_submenu-item"><a href="../Mobile Pages/session12_mob.html">12 - Women at the Well
                part 1</a></li>
            <li class="mobile_submenu-item"><a href="../Mobile Pages/session13_mob.html">13 - Women at the Well
                part 2</a></li>
            <li class="mobile_submenu-item"><a href="../Mobile Pages/session14_mob.html">14 - Second Sign</a>
            </li>
            <li class="mobile_submenu-item"><a href="../Mobile Pages/session15_mob.html">15 - The ungrateful
                beggar</a></li>
            <li class="mobile_submenu-item"><a href="../Mobile Pages/session16_mob.html">16 - Son of the
                Father</a>
            </li>
            <li class="mobile_submenu-item"><a href="../Mobile Pages/session17_mob.html">17 - Fourfold
                witness</a>
            </li>
            <li class="mobile_submenu-item"><a href="../Mobile Pages/session18_mob.html">18 - The God Man</a>
            </li>
            <li class="mobile_submenu-item"><a href="../Mobile Pages/session19_mob.html">19 - The bread of
                life</a>
            </li>
            <li class="mobile_submenu-item"><a href="../Mobile Pages/session20_mob.html">20 - Grumbling
                followers</a></li>
            <li class="mobile_submenu-item"><a href="../Mobile Pages/session21_mob.html">21 - Mission of
                Jesus</a>
            </li>
            <li class="mobile_submenu-item"><a href="../Mobile Pages/session22_mob.html">22 - Confusion about
                Jesus</a></li>
            <li class="mobile_submenu-item"><a href="../Mobile Pages/session23_mob.html">23 - Trap for Jesus</a>
            </li>
            <li class="mobile_submenu-item"><a href="../Mobile Pages/session24_mob.html">24 - I AM the Light</a>
            </li>
            <li class="mobile_submenu-item"><a href="../Mobile Pages/session25_mob.html">25 - Greater than
                Abraham</a></li>
            <li class="mobile_submenu-item"><a href="../Mobile Pages/session26_mob.html">26 - Sight to the
                blind</a></li>
            <li class="mobile_submenu-item"><a href="../Mobile Pages/session27_mob.html">27 - The good
                shepherd</a>
            </li>
            <li class="mobile_submenu-item"><a href="../Mobile Pages/session28_mob.html">28 - One with the
                Father</a></li>
            <li class="mobile_submenu-item"><a href="../Mobile Pages/session29_mob.html">29 - The resurrection
                and
                the life</a></li>
            <li class="mobile_submenu-item"><a href="../Mobile Pages/session30_mob.html">30 - Lazarus raised</a>
            </li>
          </ul>
        </li>
        <li class="mobile_menu-item">Chapter
          <ul class="mobile_submenu">
            <li class="mobile_submenu-item"><a href="../Mobile Pages/session1_mob.html">Chapter 1:1-3</a></li>
            <li class="mobile_submenu-item"><a href="../Mobile Pages/session2_mob.html">Chapter 1:3-8</a></li>
            <li class="mobile_submenu-item"><a href="../Mobile Pages/session1_mob.html">Chapter 1:1-3</a></li>
            <li class="mobile_submenu-item"><a href="../Mobile Pages/session2_mob.html">Chapter 1:3-8</a></li>
            <li class="mobile_submenu-item"><a href="../Mobile Pages/session3_mob.html">Chapter 1:9-13</a></li>
            <li class="mobile_submenu-item"><a href="../Mobile Pages/session4_mob.html">Chapter 1:14-18</a></li>
            <li class="mobile_submenu-item"><a href="../Mobile Pages/session5_mob.html">Chapter 1:19-34</a></li>
            <li class="mobile_submenu-item"><a href="../Mobile Pages/session6_mob.html">Chapter 1:34-51</a></li>
            <li class="mobile_submenu-item"><a href="../Mobile Pages/session7_mob.html">Chapter 2:1-12</a></li>
            <li class="mobile_submenu-item"><a href="../Mobile Pages/session8_mob.html">Chapter 2:13-25</a></li>
            <li class="mobile_submenu-item"><a href="../Mobile Pages/session9_mob.html">Chapter 3:1-15</a></li>
            <li class="mobile_submenu-item"><a href="../Mobile Pages/session10_mob.html">Chapter 3:16-21</a></li>
            <li class="mobile_submenu-item"><a href="../Mobile Pages/session11_mob.html">Chapter 3:22-36</a></li>
            <li class="mobile_submenu-item"><a href="../Mobile Pages/session12_mob.html">Chapter 4:1-26</a></li>
            <li class="mobile_submenu-item"><a href="../Mobile Pages/session13_mob.html">Chapter 4:27-45</a></li>
            <li class="mobile_submenu-item"><a href="../Mobile Pages/session14_mob.html">Chapter 4:46-53</a></li>
            <li class="mobile_submenu-item"><a href="../Mobile Pages/session15_mob.html">Chapter 5:1-17</a></li>
            <li class="mobile_submenu-item"><a href="../Mobile Pages/session16_mob.html">Chapter 5:18-29</a></li>
            <li class="mobile_submenu-item"><a href="../Mobile Pages/session17_mob.html">Chapter 5:30-47</a></li>
            <li class="mobile_submenu-item"><a href="../Mobile Pages/session18_mob.html">Chapter 6:1-21</a></li>
            <li class="mobile_submenu-item"><a href="../Mobile Pages/session19_mob.html">Chapter 6:22-59</a></li>
            <li class="mobile_submenu-item"><a href="../Mobile Pages/session20_mob.html">Chapter 6:52-71</a></li>
            <li class="mobile_submenu-item"><a href="../Mobile Pages/session21_mob.html">Chapter 7:1-24</a></li>
            <li class="mobile_submenu-item"><a href="../Mobile Pages/session22_mob.html">Chapter 7:25-53</a></li>
            <li class="mobile_submenu-item"><a href="../Mobile Pages/session23_mob.html">Chapter 8:1-11</a></li>
            <li class="mobile_submenu-item"><a href="../Mobile Pages/session24_mob.html">Chapter 8:12-38</a></li>
            <li class="mobile_submenu-item"><a href="../Mobile Pages/session25_mob.html">Chapter 8:39-59</a></li>
            <li class="mobile_submenu-item"><a href="../Mobile Pages/session26_mob.html">Chapter 9:1-41</a></li>
            <li class="mobile_submenu-item"><a href="../Mobile Pages/session27_mob.html">Chapter 10:1-21</a></li>
            <li class="mobile_submenu-item"><a href="../Mobile Pages/session28_mob.html">Chapter 10:22-42</a></li>
            <li class="mobile_submenu-item"><a href="../Mobile Pages/session29_mob.html">Chapter 11:1-27</a></li>
            <li class="mobile_submenu-item"><a href="../Mobile Pages/session30_mob.html">Chapter 11:28-57</a></li>
            <li class="mobile_submenu-item"><a href="../Mobile Pages/session31_mob.html">Chapter 12:1-19</a></li>
            <li class="mobile_submenu-item"><a href="../Mobile Pages/session32_mob.html">Chapter 12:20-50</a></li>
            <li class="mobile_submenu-item"><a href="../Mobile Pages/session33_mob.html">Chapter 13:1-20</a></li>
            <li class="mobile_submenu-item"><a href="../Mobile Pages/session34_mob.html">Chapter 13:21-38</a></li>
            <li class="mobile_submenu-item"><a href="../Mobile Pages/session35_mob.html">Chapter 14:1-14</a></li>
            <li class="mobile_submenu-item"><a href="../Mobile Pages/session36_mob.html">Chapter 14:15-31</a></li>
            <li class="mobile_submenu-item"><a href="../Mobile Pages/session37_mob.html">Chapter 15:1-17</a></li>
            <li class="mobile_submenu-item"><a href="../Mobile Pages/session38_mob.html">Chapter 15:18-27</a></li>
            <li class="mobile_submenu-item"><a href="../Mobile Pages/session39_mob.html">Chapter 16:1-15</a></li>
            <li class="mobile_submenu-item"><a href="../Mobile Pages/session40_mob.html">Chapter 16:16-33</a></li>
            <li class="mobile_submenu-item"><a href="../Mobile Pages/session41_mob.html">Chapter 17:1-26</a></li>
            <li class="mobile_submenu-item"><a href="../Mobile Pages/session42_mob.html">Chapter 18:1-24</a></li>
            <li class="mobile_submenu-item"><a href="../Mobile Pages/session43_mob.html">Chapter 18:25-39</a></li>
            <li class="mobile_submenu-item"><a href="../Mobile Pages/session44_mob.html">Chapter 19:1-16</a></li>
            <li class="mobile_submenu-item"><a href="../Mobile Pages/session45_mob.html">Chapter 19:17-27</a></li>
            <li class="mobile_submenu-item"><a href="../Mobile Pages/session46_mob.html">Chapter 19:28-42</a></li>
            <li class="mobile_submenu-item"><a href="../Mobile Pages/session47_mob.html">Chapter 20:1-10</a></li>
            <li class="mobile_submenu-item"><a href="../Mobile Pages/session48_mob.html">Chapter 20:11-31</a></li>
            <li class="mobile_submenu-item"><a href="../Mobile Pages/session49_mob.html">Chapter 21:1-25</a></li>
            <li class="mobile_submenu-item"><a href="../Mobile Pages/Seek/summary_mob.html">Summary</a></li>
          </ul>
        </li>
        <li class="mobile_menu-item">Topics
          <ul class="mobile_submenu">
            <li class="mobile_submenu-item"><a href="">The Word</a></li>
            <li class="mobile_submenu-item"><a href="">Nature of God</a></li>
            <li class="mobile_submenu-item"><a href="">Trinity</a></li>
            <li class="mobile_submenu-item"><a href="">Creation</a></li>
            <li class="mobile_submenu-item"><a href="">Biblical Authenticity</a>
            </li>
          </ul>
        </li>
        <li class="mobile_menu-item">About
          <ul class="mobile_submenu">
            <div class="menu-about-space"></div>
            <div class="menu-about-large">Society for Biblical Reformation</div>
            <div class="menu-about-large"><a href="https://www.biblicalreformation.com">www.biblicalreformation.com</a>
            </div>
            <div class="menu-about-space"></div>
            <div class="menu-about-small">email questions and comments to:</div>
            <div class="menu-about-space"></div>
            <div class="menu-about-large">biblicalreformation@gmail.com</div>
          </ul>
        </li>
      </ul>
    </div>
  </div>

  <div class="container">

    <div class="space"></div>
    <div class="space"></div>

    <div class="title">
      <img src="../Images/blue_header.webp" alt="Session header" class="session-header">
      <div alt="Session banner" class="session-banner-left"></div>
      <div alt="Session banner" class="session-banner-right"></div>
      <div class="session-header-text-left">Session {session_num}</div>
      <div class="session-header-text-right">{data['title']}</div>
    </div>

    <div class="space"></div>

    <div class="header">
      <img src="../Images/terqoise_header.webp" alt="Open header" class="open-header">
      <div alt="Open banner" class="open-banner"></div>
      <div class="open-header-text">Opening Prayer</div>
    </div>

    <div class="bubble-wrapper">
      <div class="open-bubble">{data['open_prayer']}</div>
    </div>

    <div class="space"></div>

    <div class="header">
      <img src="../Images/purple_header.webp" alt="Bible header" class="bible-header">
      <div alt="Bible header" class="bible-banner"></div>
      <div class="bible-header-text">Bible Reading</div>
    </div>

    <div class="bubble-wrapper">
      <div class="bible-bubble">
        <h1>{data['reading']}</h1>
        {data['reading_text']}
      </div>
    </div>

    <div class="space"></div>

    <div class="header">
      <img src="../Images/lightblue_header.webp" alt="Open header" class="commentary-header">
      <div alt="Commentary header" class="commentary-banner"></div>
      <div class="commentary-header-text">Commentary</div>
    </div>

    <div class="video">
      <img src="../Images/blue_video_block.svg" alt="video background" class="video-background">
      <div class="video_container">
        <lite-youtube videoid="{data['video_id']}" playlabel="{data['title']} Commentary" js-api></lite-youtube>
      </div>
    </div>

    {self._generate_chapter_elements(chapters)}

    <div class="space"></div>

    <div class="header">
      <img src="../Images/red_header.webp" alt="Meditation header" class="meditation-header">
      <div alt="Meditation header" class="meditation-banner"></div>
      <div class="meditation-header-text">Meditation Questions</div>
    </div>

    {self._generate_meditation_elements(data['meditate_questions'])}


    <div class="space"></div>

    <div class="header">
      <img src="../Images/green_header.webp" alt="Close header" class="close-header">
      <div alt="Close banner" class="close-banner"></div>
      <div class="close-header-text">Closing Prayer</div>
    </div>

    <div class="bubble-wrapper">
      <div class="close-bubble">{data['close_prayer']}</div>
    </div>

    <div class="space"></div>

    <div class="header">
      <img src="../Images/orange_header.webp" alt="Further Study header" class="study-header">
      <div alt="Further Study header" class="study-banner"></div>
      <div class="study-header-text">Further Study</div>
    </div>

    {self._generate_study_elements(data['further_links'])}

    <div class="space"></div>

    <div class="header">
      <img src="../Images/emerald_header.webp" alt="Sermons header" class="sermon-header">
      <div alt="Sermons header" class="sermon-banner"></div>
      <div class="sermon-header-text">Helpful Sermons</div>
    </div>

    {self._generate_sermon_elements(data['sermon_links'])}

    <div class="space"></div>

  </div>

  <script src="../Scripts/youtube.js"></script>
  <script src="../Scripts/menu.js"></script>
  <script src="../Scripts/session_mob.js"></script>
  <script src="../Scripts/session{session_num}.js"></script>

</body>

</html>'''
        
        return html_template
    
    def _generate_chapter_elements(self, chapters: List[Dict[str, str]]) -> str:
        """Generate HTML elements for video chapters"""
        elements = []
        for i, chapter in enumerate(chapters, 1):
            elements.append('    <div class="links">')
            elements.append(f'      <div class="chapter-link-banner" id="chapter{i}"></div>')
            elements.append(f'      <div class="chapter-link-text">{chapter["title"]}</div>')
            elements.append('      <img class="chapter-link-image" src="../Images/commentary.svg">')
            elements.append('    </div>')

        return '\n'.join(elements)
    
    def _generate_meditation_elements(self, questions: List[str]) -> str:
        """Generate HTML elements for meditation questions"""
        elements = []

        for i, question in enumerate(questions, 1):
            elements.append('    <div class="meditation-text">')
            elements.append(f'{question}')
            elements.append('    </div>')
            if i % 2 == 0:
              elements.append('    <img class="meditation-background-right" src="../Images/meditation.svg">')
            else:
              elements.append('    <img class="meditation-background-left" src="../Images/meditation.svg">')
        
        return '\n'.join(elements)
    
    def _generate_study_elements(self, links: List[Dict[str, str]]) -> str:
        """Generate HTML elements for further study links"""

        elements = []
        for i, link in enumerate(links, 1):
            elements.append('    <div class="links">')
            elements.append(f'      <div class="study-link-banner" id="Study{i}"></div>')
            elements.append(f'      <div class="study-link-text">{link["title"]}</div>')
            elements.append('      <img class="study-link-image" src="../Images/study.svg">')
            elements.append('    </div>')
        
        return '\n'.join(elements)
    
    def _generate_sermon_elements(self, links: List[Dict[str, str]]) -> str:
        """Generate HTML elements for sermon links"""
        elements = []
        for i, link in enumerate(links, 1):
            elements.append('    <div class="links">')
            elements.append(f'      <div class="sermon-link-banner" id="sermon{i}"></div>')
            elements.append(f'      <div class="sermon-link-text">{link["title"]}</div>')
            elements.append('      <img class="sermon-link-image" src="../Images/scroll.svg">')
            elements.append('    </div>')
        
        return '\n'.join(elements)

def main():
    """Main function to convert txt to HTML"""
    converter = SessionConverter()
    
    session_number = 6
    
    # Read the txt file
    txt_file = f"F:\SBR\John\Website\Desktop Pages/ses{session_number}.txt"
    if not os.path.exists(txt_file):
        print(f"Error: File '{txt_file}' not found.")
        return
    
    try:
        with open(txt_file, 'r', encoding='utf-8') as f:
            txt_content = f.read()
    except Exception as e:
        print(f"Error reading file: {e}")
        return

    # Parse the content
    session_data = converter.parse_txt_file(txt_content)
    
    # Generate HTML
    html_content = converter.generate_html(session_number, session_data)
    css_content = converter.generate_css(session_number, session_data)
    
    # Save the HTML file
    session_file = f"F:\SBR\John\Website\Mobile Pages/session{session_number}_mob.html"
    css_file = f"F:\SBR\John\Website\Styles/session{session_number}_mob.css"
    try:
        with open(session_file, 'w', encoding='utf-8') as f:
            f.write(html_content)
        print(f"HTML file generated successfully: {session_file}")
        with open(css_file, 'w', encoding='utf-8') as f:
            f.write(css_content)
        print(f"HTML file generated successfully: {css_file}")
    except Exception as e:
        print(f"Error writing file: {e}")

if __name__ == "__main__":
    main()